const getCroppedImageUrl = (url: string) => {
  const target='p/'
  const index = url.indexOf(target) + target.length;
 return url.slice(0, index) + 'w300' + url.slice(index);
}
export default getCroppedImageUrl;