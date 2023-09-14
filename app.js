var init = (function () {
  const isInFrame = window.frameElement;

  if (isInFrame) {
    const iframeElement = document.createElement("iframe");
    iframeElement.src =
      "https://docs.google.com/forms/d/e/1FAIpQLScQpVWXXXVkXR3jj8INR9EKDquUUYi8lLisjDMVlDxhtmS3Ow/viewform?embedded=true";
    iframeElement.width = 800;
    iframeElement.height = 600;

    document.querySelector("#app").appendChild(iframeElement);
  }
})();
