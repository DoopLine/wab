import { _ as _inherits, a as _getPrototypeOf, b as _possibleConstructorReturn, c as _classCallCheck, i as init, s as safe_not_equal, d as _assertThisInitialized, e as dispatch_dev, f as _createClass, S as SvelteComponentDev, v as validate_each_argument, h as validate_slots, j as element, t as text, k as claim_element, q as children, r as claim_text, p as detach_dev, l as attr_dev, m as add_location, n as insert_dev, u as append_dev, w as set_data_dev, x as space, y as claim_space, z as _slicedToArray, A as noop, B as destroy_each, $ as _asyncToGenerator, a0 as regenerator, X as globals, D as create_component, Z as query_selector_all, E as claim_component, F as mount_component, G as transition_in, H as transition_out, I as destroy_component } from './client.a70cd07f.js';
import { P as Post } from './Post.a5d586c7.js';

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function () { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }
var file = "src\\components\\article\\Hero.svelte";

function get_each_context(ctx, list, i) {
  var child_ctx = ctx.slice();
  child_ctx[3] = list[i];
  return child_ctx;
} // (23:4) {#each tags as tag}


function create_each_block(ctx) {
  var small;
  var t_value =
  /*tag*/
  ctx[3] + "";
  var t;
  var block = {
    c: function create() {
      small = element("small");
      t = text(t_value);
      this.h();
    },
    l: function claim(nodes) {
      small = claim_element(nodes, "SMALL", {
        class: true
      });
      var small_nodes = children(small);
      t = claim_text(small_nodes, t_value);
      small_nodes.forEach(detach_dev);
      this.h();
    },
    h: function hydrate() {
      attr_dev(small, "class", "mx-4 my-2");
      add_location(small, file, 23, 6, 740);
    },
    m: function mount(target, anchor) {
      insert_dev(target, small, anchor);
      append_dev(small, t);
    },
    p: function update(ctx, dirty) {
      if (dirty &
      /*tags*/
      4 && t_value !== (t_value =
      /*tag*/
      ctx[3] + "")) set_data_dev(t, t_value);
    },
    d: function destroy(detaching) {
      if (detaching) detach_dev(small);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_each_block.name,
    type: "each",
    source: "(23:4) {#each tags as tag}",
    ctx: ctx
  });
  return block;
}

function create_fragment(ctx) {
  var header;
  var img;
  var img_src_value;
  var t0;
  var div;
  var t1;
  var span;
  var t2;
  var h1;
  var t3;
  var each_value =
  /*tags*/
  ctx[2];
  validate_each_argument(each_value);
  var each_blocks = [];

  for (var i = 0; i < each_value.length; i += 1) {
    each_blocks[i] = create_each_block(get_each_context(ctx, each_value, i));
  }

  var block = {
    c: function create() {
      header = element("header");
      img = element("img");
      t0 = space();
      div = element("div");
      t1 = space();
      span = element("span");

      for (var _i = 0; _i < each_blocks.length; _i += 1) {
        each_blocks[_i].c();
      }

      t2 = space();
      h1 = element("h1");
      t3 = text(
      /*title*/
      ctx[0]);
      this.h();
    },
    l: function claim(nodes) {
      header = claim_element(nodes, "HEADER", {
        class: true
      });
      var header_nodes = children(header);
      img = claim_element(header_nodes, "IMG", {
        class: true,
        src: true,
        alt: true
      });
      t0 = claim_space(header_nodes);
      div = claim_element(header_nodes, "DIV", {
        class: true
      });
      children(div).forEach(detach_dev);
      t1 = claim_space(header_nodes);
      span = claim_element(header_nodes, "SPAN", {
        class: true
      });
      var span_nodes = children(span);

      for (var _i2 = 0; _i2 < each_blocks.length; _i2 += 1) {
        each_blocks[_i2].l(span_nodes);
      }

      span_nodes.forEach(detach_dev);
      t2 = claim_space(header_nodes);
      h1 = claim_element(header_nodes, "H1", {
        class: true
      });
      var h1_nodes = children(h1);
      t3 = claim_text(h1_nodes,
      /*title*/
      ctx[0]);
      h1_nodes.forEach(detach_dev);
      header_nodes.forEach(detach_dev);
      this.h();
    },
    h: function hydrate() {
      attr_dev(img, "class", "absolute top-0 left-0 w-full h-full object-cover pointer-events-none");
      if (img.src !== (img_src_value =
      /*cover*/
      ctx[1])) attr_dev(img, "src", img_src_value);
      attr_dev(img, "alt",
      /*title*/
      ctx[0]);
      add_location(img, file, 14, 2, 422);
      attr_dev(div, "class", "absolute top-0 left-0 w-full h-full bg-black opacity-50\r\n    pointer-events-none");
      add_location(div, file, 18, 2, 549);
      attr_dev(span, "class", "relative flex flex-wrap justify-center");
      add_location(span, file, 21, 2, 654);
      attr_dev(h1, "class", "relative text-6xl font-bold");
      add_location(h1, file, 26, 2, 806);
      attr_dev(header, "class", "relative flex flex-col justify-center items-center mb-20 -mt-20 -mx-5\r\n  py-20 px-10 text-white text-center");
      add_location(header, file, 11, 0, 291);
    },
    m: function mount(target, anchor) {
      insert_dev(target, header, anchor);
      append_dev(header, img);
      append_dev(header, t0);
      append_dev(header, div);
      append_dev(header, t1);
      append_dev(header, span);

      for (var _i3 = 0; _i3 < each_blocks.length; _i3 += 1) {
        each_blocks[_i3].m(span, null);
      }

      append_dev(header, t2);
      append_dev(header, h1);
      append_dev(h1, t3);
    },
    p: function update(ctx, _ref) {
      var _ref2 = _slicedToArray(_ref, 1),
          dirty = _ref2[0];

      if (dirty &
      /*cover*/
      2 && img.src !== (img_src_value =
      /*cover*/
      ctx[1])) {
        attr_dev(img, "src", img_src_value);
      }

      if (dirty &
      /*title*/
      1) {
        attr_dev(img, "alt",
        /*title*/
        ctx[0]);
      }

      if (dirty &
      /*tags*/
      4) {
        each_value =
        /*tags*/
        ctx[2];
        validate_each_argument(each_value);

        var _i4;

        for (_i4 = 0; _i4 < each_value.length; _i4 += 1) {
          var child_ctx = get_each_context(ctx, each_value, _i4);

          if (each_blocks[_i4]) {
            each_blocks[_i4].p(child_ctx, dirty);
          } else {
            each_blocks[_i4] = create_each_block(child_ctx);

            each_blocks[_i4].c();

            each_blocks[_i4].m(span, null);
          }
        }

        for (; _i4 < each_blocks.length; _i4 += 1) {
          each_blocks[_i4].d(1);
        }

        each_blocks.length = each_value.length;
      }

      if (dirty &
      /*title*/
      1) set_data_dev(t3,
      /*title*/
      ctx[0]);
    },
    i: noop,
    o: noop,
    d: function destroy(detaching) {
      if (detaching) detach_dev(header);
      destroy_each(each_blocks, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_fragment.name,
    type: "component",
    source: "",
    ctx: ctx
  });
  return block;
}

function instance($$self, $$props, $$invalidate) {
  var title = $$props.title;
  var cover = $$props.cover;
  var tags = $$props.tags;
  var writable_props = ["title", "cover", "tags"];
  Object.keys($$props).forEach(function (key) {
    if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn("<Hero> was created with unknown prop '".concat(key, "'"));
  });
  var _$$props$$$slots = $$props.$$slots,
      $$slots = _$$props$$$slots === void 0 ? {} : _$$props$$$slots,
      $$scope = $$props.$$scope;
  validate_slots("Hero", $$slots, []);

  $$self.$set = function ($$props) {
    if ("title" in $$props) $$invalidate(0, title = $$props.title);
    if ("cover" in $$props) $$invalidate(1, cover = $$props.cover);
    if ("tags" in $$props) $$invalidate(2, tags = $$props.tags);
  };

  $$self.$capture_state = function () {
    return {
      title: title,
      cover: cover,
      tags: tags
    };
  };

  $$self.$inject_state = function ($$props) {
    if ("title" in $$props) $$invalidate(0, title = $$props.title);
    if ("cover" in $$props) $$invalidate(1, cover = $$props.cover);
    if ("tags" in $$props) $$invalidate(2, tags = $$props.tags);
  };

  if ($$props && "$$inject" in $$props) {
    $$self.$inject_state($$props.$$inject);
  }

  return [title, cover, tags];
}

var Hero = /*#__PURE__*/function (_SvelteComponentDev) {
  _inherits(Hero, _SvelteComponentDev);

  var _super = _createSuper(Hero);

  function Hero(options) {
    var _this;

    _classCallCheck(this, Hero);

    _this = _super.call(this, options);
    init(_assertThisInitialized(_this), options, instance, create_fragment, safe_not_equal, {
      title: 0,
      cover: 1,
      tags: 2
    });
    dispatch_dev("SvelteRegisterComponent", {
      component: _assertThisInitialized(_this),
      tagName: "Hero",
      options: options,
      id: create_fragment.name
    });
    var ctx = _this.$$.ctx;
    var props = options.props || {};

    if (
    /*title*/
    ctx[0] === undefined && !("title" in props)) {
      console.warn("<Hero> was created without expected prop 'title'");
    }

    if (
    /*cover*/
    ctx[1] === undefined && !("cover" in props)) {
      console.warn("<Hero> was created without expected prop 'cover'");
    }

    if (
    /*tags*/
    ctx[2] === undefined && !("tags" in props)) {
      console.warn("<Hero> was created without expected prop 'tags'");
    }

    return _this;
  }

  _createClass(Hero, [{
    key: "title",
    get: function get() {
      throw new Error("<Hero>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    },
    set: function set(value) {
      throw new Error("<Hero>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    }
  }, {
    key: "cover",
    get: function get() {
      throw new Error("<Hero>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    },
    set: function set(value) {
      throw new Error("<Hero>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    }
  }, {
    key: "tags",
    get: function get() {
      throw new Error("<Hero>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    },
    set: function set(value) {
      throw new Error("<Hero>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    }
  }]);

  return Hero;
}(SvelteComponentDev);

function _createSuper$1(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct$1(); return function () { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct$1() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }
var console_1 = globals.console;
var file$1 = "src\\routes\\articles\\[id].svelte";

function create_fragment$1(ctx) {
  var title_value;
  var link;
  var t0;
  var t1;
  var section;
  var raw_value =
  /*post*/
  ctx[0].body + "";
  var current;
  document.title = title_value = "WAB - " + (
  /*post*/
  ctx[0].title || "Não foi possivel carregar");
  var hero = new Hero({
    props: {
      title:
      /*post*/
      ctx[0].title,
      tags:
      /*post*/
      ctx[0].tags,
      cover:
      /*post*/
      ctx[0].img
    },
    $$inline: true
  });
  var block = {
    c: function create() {
      link = element("link");
      t0 = space();
      create_component(hero.$$.fragment);
      t1 = space();
      section = element("section");
      this.h();
    },
    l: function claim(nodes) {
      var head_nodes = query_selector_all("[data-svelte=\"svelte-nq4c5j\"]", document.head);
      link = claim_element(head_nodes, "LINK", {
        rel: true,
        href: true
      });
      head_nodes.forEach(detach_dev);
      t0 = claim_space(nodes);
      claim_component(hero.$$.fragment, nodes);
      t1 = claim_space(nodes);
      section = claim_element(nodes, "SECTION", {
        class: true
      });
      var section_nodes = children(section);
      section_nodes.forEach(detach_dev);
      this.h();
    },
    h: function hydrate() {
      attr_dev(link, "rel", "stylesheet");
      attr_dev(link, "href", "article.css");
      add_location(link, file$1, 63, 2, 1525);
      attr_dev(section, "class", "wab-article px-20");
      add_location(section, file$1, 67, 0, 1652);
    },
    m: function mount(target, anchor) {
      append_dev(document.head, link);
      insert_dev(target, t0, anchor);
      mount_component(hero, target, anchor);
      insert_dev(target, t1, anchor);
      insert_dev(target, section, anchor);
      section.innerHTML = raw_value;
      current = true;
    },
    p: function update(ctx, _ref) {
      var _ref2 = _slicedToArray(_ref, 1),
          dirty = _ref2[0];

      if ((!current || dirty &
      /*post*/
      1) && title_value !== (title_value = "WAB - " + (
      /*post*/
      ctx[0].title || "Não foi possivel carregar"))) {
        document.title = title_value;
      }

      var hero_changes = {};
      if (dirty &
      /*post*/
      1) hero_changes.title =
      /*post*/
      ctx[0].title;
      if (dirty &
      /*post*/
      1) hero_changes.tags =
      /*post*/
      ctx[0].tags;
      if (dirty &
      /*post*/
      1) hero_changes.cover =
      /*post*/
      ctx[0].img;
      hero.$set(hero_changes);
      if ((!current || dirty &
      /*post*/
      1) && raw_value !== (raw_value =
      /*post*/
      ctx[0].body + "")) section.innerHTML = raw_value;
    },
    i: function intro(local) {
      if (current) return;
      transition_in(hero.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(hero.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      detach_dev(link);
      if (detaching) detach_dev(t0);
      destroy_component(hero, detaching);
      if (detaching) detach_dev(t1);
      if (detaching) detach_dev(section);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_fragment$1.name,
    type: "component",
    source: "",
    ctx: ctx
  });
  return block;
}

function preload(_x) {
  return _preload.apply(this, arguments);
}

function _preload() {
  _preload = _asyncToGenerator( /*#__PURE__*/regenerator.mark(function _callee2(page) {
    var _this2 = this;

    var id, handleOnline, handleOffline, isOnline, post;
    return regenerator.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            id = page.params.id;

            handleOnline = /*#__PURE__*/function () {
              var _ref3 = _asyncToGenerator( /*#__PURE__*/regenerator.mark(function _callee() {
                var res, article, post;
                return regenerator.wrap(function _callee$(_context) {
                  while (1) {
                    switch (_context.prev = _context.next) {
                      case 0:
                        _context.next = 2;
                        return _this2.fetch("https://dev.to/api/articles/".concat(id));

                      case 2:
                        res = _context.sent;
                        _context.next = 5;
                        return res.json();

                      case 5:
                        article = _context.sent;
                        post = Post(article.id, article.title, article.description, article.tags, article["cover_image"], article["body_html"]);
                        localStorage.setItem("article".concat(post.id), JSON.stringify(post));
                        return _context.abrupt("return", post);

                      case 9:
                      case "end":
                        return _context.stop();
                    }
                  }
                }, _callee);
              }));

              return function handleOnline() {
                return _ref3.apply(this, arguments);
              };
            }();

            handleOffline = function handleOffline() {
              var savedPost = Post();
              savedPost = JSON.parse(localStorage.getItem("article".concat(id)));

              if (!savedPost && !savedPost.id) {
                console.log("post não disponivel offline!");
                return {};
              }

              return savedPost;
            }; // init


            isOnline = navigator.onLine;

            if (!isOnline) {
              _context2.next = 10;
              break;
            }

            _context2.next = 7;
            return handleOnline();

          case 7:
            post = _context2.sent;
            _context2.next = 11;
            break;

          case 10:
            post = handleOffline();

          case 11:
            return _context2.abrupt("return", {
              post: post
            });

          case 12:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));
  return _preload.apply(this, arguments);
}

function instance$1($$self, $$props, $$invalidate) {
  var _$$props$post = $$props.post,
      post = _$$props$post === void 0 ? Post() : _$$props$post;
  var writable_props = ["post"];
  Object.keys($$props).forEach(function (key) {
    if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console_1.warn("<U5Bidu5D> was created with unknown prop '".concat(key, "'"));
  });
  var _$$props$$$slots = $$props.$$slots,
      $$slots = _$$props$$$slots === void 0 ? {} : _$$props$$$slots,
      $$scope = $$props.$$scope;
  validate_slots("U5Bidu5D", $$slots, []);

  $$self.$set = function ($$props) {
    if ("post" in $$props) $$invalidate(0, post = $$props.post);
  };

  $$self.$capture_state = function () {
    return {
      Post: Post,
      preload: preload,
      Hero: Hero,
      post: post
    };
  };

  $$self.$inject_state = function ($$props) {
    if ("post" in $$props) $$invalidate(0, post = $$props.post);
  };

  if ($$props && "$$inject" in $$props) {
    $$self.$inject_state($$props.$$inject);
  }

  return [post];
}

var U5Bidu5D = /*#__PURE__*/function (_SvelteComponentDev) {
  _inherits(U5Bidu5D, _SvelteComponentDev);

  var _super = _createSuper$1(U5Bidu5D);

  function U5Bidu5D(options) {
    var _this;

    _classCallCheck(this, U5Bidu5D);

    _this = _super.call(this, options);
    init(_assertThisInitialized(_this), options, instance$1, create_fragment$1, safe_not_equal, {
      post: 0
    });
    dispatch_dev("SvelteRegisterComponent", {
      component: _assertThisInitialized(_this),
      tagName: "U5Bidu5D",
      options: options,
      id: create_fragment$1.name
    });
    return _this;
  }

  _createClass(U5Bidu5D, [{
    key: "post",
    get: function get() {
      throw new Error("<U5Bidu5D>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    },
    set: function set(value) {
      throw new Error("<U5Bidu5D>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    }
  }]);

  return U5Bidu5D;
}(SvelteComponentDev);

export default U5Bidu5D;
export { preload };
