const paginate = (followers) => {
  const itemsperpage = 8;
  const numberofpages = Math.ceil(followers.length / itemsperpage);
  const newfollowers = Array.from({ length: numberofpages }, (_, index) => {
    const start = index * itemsperpage;
    return followers.slice(start, start + itemsperpage);
  });
  return newfollowers;
};
export default paginate;
