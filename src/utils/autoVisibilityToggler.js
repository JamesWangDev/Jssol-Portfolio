const autoVisibilityToggler = (isVisible, router, pathname, hash) => {
  if (isVisible) {
    router.push({
      pathname,
      hash,
    });
  }
};

export default autoVisibilityToggler;
