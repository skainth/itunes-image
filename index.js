function copyToClipboard(str) {
  const el = document.createElement('textarea');
  el.value = str;
  document.body.appendChild(el);
  el.select();
  document.execCommand('copy');
  document.body.removeChild(el);
};

var path = $("picture.product-artwork source")[0].srcset.split(',')[2].split(' ')[0];
copyToClipboard(path);
alert(path);