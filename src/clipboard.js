const setClipboard = () => {
  const clipboard = new ClipboardJS('.copy-btn');
  const tooltip = document.querySelector('.tooltip');

  clipboard.on('success', (e) => {
    tooltip.innerText = '복사 되었습니다!';
    tooltip.classList.add('show-tooltip');
    setTimeout(() => {
      tooltip.classList.remove('show-tooltip');
    }, 1500);
    e.clearSelection();
  });

  clipboard.on('error', (e) => {
    tooltip.innerText = '지원하지 않는 브라우저입니다.';
    tooltip.classList.add('show-tooltip');
    setTimeout(() => {
      tooltip.classList.remove('show-tooltip');
    }, 1500);
    e.clearSelection();
  });
};

export default setClipboard;
