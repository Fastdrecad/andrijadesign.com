export const lockScroll = () => {
  document.documentElement.classList.add("no-scroll");
};

export const unlockScroll = () => {
  document.documentElement.classList.remove("no-scroll");
};
