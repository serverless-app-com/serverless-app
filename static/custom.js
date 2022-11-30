function appendVersionList() {
  const versions = [];
  versions.map((version) => {
    var versionItem = document.createElement('li');
    var link = document.createElement('a');
    link.href = '/docs/' + version;
    link.innerText = version + '(Archived)';
    link.classList = ['dropdown__link'];
    versionItem.appendChild(link);
    document
      .getElementsByClassName('dropdown__menu')
      .item(0)
      .appendChild(versionItem);
  });
}

setTimeout(appendVersionList, 500);
