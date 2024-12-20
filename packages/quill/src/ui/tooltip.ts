import type Quill from '../core.js';
import type { Bounds } from '../core/selection.js';

const isScrollable = (el: Element) => {
  const { overflowY } = getComputedStyle(el, null);
  return overflowY !== 'visible' && overflowY !== 'clip';
};

class Tooltip {
  quill: Quill;
  boundsContainer: HTMLElement;
  root: HTMLDivElement;

  constructor(quill: Quill, boundsContainer?: HTMLElement) {
    this.quill = quill;
    this.boundsContainer = boundsContainer || document.body;
    this.root = quill.addContainer('ql-tooltip');
    // @ts-expect-error
    this.root.innerHTML = this.constructor.TEMPLATE;
    if (isScrollable(this.quill.root)) {
      this.quill.root.addEventListener('scroll', () => {
        this.root.style.marginTop = `${-1 * this.quill.root.scrollTop}px`;
      });
    }
    this.hide();
  }

  hide() {
    this.root.classList.add('ql-hidden');
  }

  position(reference: Bounds) {
    const containerBounds = this.boundsContainer.getBoundingClientRect();
    const rootBounds = this.root.getBoundingClientRect();
    
    // Calculate initial position (centered)
    let left = reference.left + reference.width / 2 - this.root.offsetWidth / 2;
    let top = reference.bottom + this.quill.root.scrollTop;
    
    // Constrain horizontal position
    left = Math.max(
      containerBounds.left,
      Math.min(left, containerBounds.right - this.root.offsetWidth)
    );
    
    // Constrain vertical position
    const bottomSpace = containerBounds.bottom - reference.bottom;
    const topSpace = reference.top - containerBounds.top;
    const tooltipHeight = rootBounds.height;
    
    // If tooltip doesn't fit below, and there's more space above, flip it
    if (bottomSpace < tooltipHeight && topSpace > tooltipHeight) {
      top = reference.top - tooltipHeight + this.quill.root.scrollTop;
      this.root.classList.add('ql-flip');
    } else {
      this.root.classList.remove('ql-flip');
    }
    
    // Final position constraining
    top = Math.max(
      containerBounds.top,
      Math.min(top, containerBounds.bottom - tooltipHeight)
    );
    
    this.root.style.left = `${left}px`;
    this.root.style.top = `${top}px`;
    
    return left - (reference.left + reference.width / 2 - this.root.offsetWidth / 2);
  }

  show() {
    this.root.classList.remove('ql-editing');
    this.root.classList.remove('ql-hidden');
  }
}

export default Tooltip;
