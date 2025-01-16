// @Alaa: Dedicated layout management for Quill editor
export function setupEditorLayout(container: HTMLElement) {
  const toolbarElement = container.querySelector('.ql-toolbar');
  const editorElement = container.querySelector('.ql-editor');
  
  if (toolbarElement && editorElement instanceof HTMLElement) {
    // Set up flex layout
    container.style.display = 'flex';
    container.style.flexDirection = 'column';
    container.style.height = '100%';
    container.style.minHeight = '150px';
    
    // Configure toolbar
    toolbarElement.style.flex = '0 0 auto';
    toolbarElement.style.position = 'relative';
    toolbarElement.style.zIndex = '11';
    
    // Configure editor
    editorElement.style.flex = '1';
    editorElement.style.position = 'relative';
    editorElement.style.overflow = 'auto';
    editorElement.style.minHeight = '0'; // Important for flex child scrolling
  }
}
