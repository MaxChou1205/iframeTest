var init = (function () {
  const referer = document.referrer;

  if (referer.includes("salesforce-experience.com") || referer.includes('sandbox.my.site.com')) {
    const iframeElement = document.createElement("iframe");
    iframeElement.src =
      "https://docs.google.com/forms/d/e/1FAIpQLScQpVWXXXVkXR3jj8INR9EKDquUUYi8lLisjDMVlDxhtmS3Ow/viewform?embedded=true";
    iframeElement.width = 800;
    iframeElement.height = 600;

    document.querySelector("#app").appendChild(iframeElement);
  } else {
    document.querySelector("#app").innerHTML = 'Access denied'
  }
})();
