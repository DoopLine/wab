var Post = (function () {
  var id = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
  var title = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "";
  var desc = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "";
  var tags = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : [];
  var img = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : "/successkid.jpg";
  var body = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : "";
  return {
    id: id,
    title: title,
    desc: desc,
    img: img,
    tags: tags,
    body: body
  };
});

export { Post as P };
