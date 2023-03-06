const autoVisibilityToggler = (isVisible, section) => {
  if (isVisible) {
    const links = document.getElementById('desktop_nav')?.getElementsByClassName('navlist_item_link') || [];
    for (let i = 0; i < links?.length; i += 1) {
      if (section === links[i].textContent?.toLowerCase()) {
        links[i].parentElement?.classList.add('in_view');
      } else {
        links[i].parentElement?.classList.remove('in_view');
      }
    }
  }
};

export default autoVisibilityToggler;
