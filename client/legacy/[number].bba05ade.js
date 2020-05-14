import { T as _asyncToGenerator, U as regenerator, _ as _inherits, a as _getPrototypeOf, b as _possibleConstructorReturn, c as _classCallCheck, i as init, s as safe_not_equal, d as _assertThisInitialized, e as dispatch_dev, f as _createClass, S as SvelteComponentDev, a0 as globals, E as onMount, g as validate_slots, F as goto, L as LoadingOverlay, H as create_component, I as claim_component, J as mount_component, K as transition_in, M as transition_out, N as destroy_component, u as space, O as empty, P as query_selector_all, m as detach_dev, w as claim_space, p as insert_dev, y as _slicedToArray, Q as group_outros, R as check_outros } from './client.8bd9bda1.js';
import { P as Post } from './Post.a5d586c7.js';
import { a as Pagination, P as PostsGrid } from './Pagination.a1c4fcc2.js';

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function () { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }
var Error_1 = globals.Error;

function create_if_block(ctx) {
  var current;
  var loadingoverlay = new LoadingOverlay({
    $$inline: true
  });
  var block = {
    c: function create() {
      create_component(loadingoverlay.$$.fragment);
    },
    l: function claim(nodes) {
      claim_component(loadingoverlay.$$.fragment, nodes);
    },
    m: function mount(target, anchor) {
      mount_component(loadingoverlay, target, anchor);
      current = true;
    },
    i: function intro(local) {
      if (current) return;
      transition_in(loadingoverlay.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(loadingoverlay.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(loadingoverlay, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_if_block.name,
    type: "if",
    source: "(87:0) {#if isFetching}",
    ctx: ctx
  });
  return block;
}

function create_fragment(ctx) {
  var title_value;
  var t0;
  var t1;
  var t2;
  var t3;
  var if_block_anchor;
  var current;
  document.title = title_value = "WAB - artigos p\xE1gina ".concat(
  /*number*/
  ctx[0]);
  var pagination0 = new Pagination({
    props: {
      pageCount:
      /*number*/
      ctx[0]
    },
    $$inline: true
  });
  pagination0.$on("prev",
  /*prevPage*/
  ctx[5]);
  pagination0.$on("next",
  /*nextPage*/
  ctx[4]);
  var postsgrid = new PostsGrid({
    props: {
      posts:
      /*posts*/
      ctx[1]
    },
    $$inline: true
  });
  postsgrid.$on("getpost",
  /*getpost_handler*/
  ctx[7]);
  var pagination1 = new Pagination({
    props: {
      pageCount:
      /*number*/
      ctx[0]
    },
    $$inline: true
  });
  pagination1.$on("prev",
  /*prevPage*/
  ctx[5]);
  pagination1.$on("next",
  /*nextPage*/
  ctx[4]);
  var if_block =
  /*isFetching*/
  ctx[2] && create_if_block(ctx);
  var block = {
    c: function create() {
      t0 = space();
      create_component(pagination0.$$.fragment);
      t1 = space();
      create_component(postsgrid.$$.fragment);
      t2 = space();
      create_component(pagination1.$$.fragment);
      t3 = space();
      if (if_block) if_block.c();
      if_block_anchor = empty();
    },
    l: function claim(nodes) {
      var head_nodes = query_selector_all("[data-svelte=\"svelte-116gbmi\"]", document.head);
      head_nodes.forEach(detach_dev);
      t0 = claim_space(nodes);
      claim_component(pagination0.$$.fragment, nodes);
      t1 = claim_space(nodes);
      claim_component(postsgrid.$$.fragment, nodes);
      t2 = claim_space(nodes);
      claim_component(pagination1.$$.fragment, nodes);
      t3 = claim_space(nodes);
      if (if_block) if_block.l(nodes);
      if_block_anchor = empty();
    },
    m: function mount(target, anchor) {
      insert_dev(target, t0, anchor);
      mount_component(pagination0, target, anchor);
      insert_dev(target, t1, anchor);
      mount_component(postsgrid, target, anchor);
      insert_dev(target, t2, anchor);
      mount_component(pagination1, target, anchor);
      insert_dev(target, t3, anchor);
      if (if_block) if_block.m(target, anchor);
      insert_dev(target, if_block_anchor, anchor);
      current = true;
    },
    p: function update(ctx, _ref) {
      var _ref2 = _slicedToArray(_ref, 1),
          dirty = _ref2[0];

      if ((!current || dirty &
      /*number*/
      1) && title_value !== (title_value = "WAB - artigos p\xE1gina ".concat(
      /*number*/
      ctx[0]))) {
        document.title = title_value;
      }

      var pagination0_changes = {};
      if (dirty &
      /*number*/
      1) pagination0_changes.pageCount =
      /*number*/
      ctx[0];
      pagination0.$set(pagination0_changes);
      var postsgrid_changes = {};
      if (dirty &
      /*posts*/
      2) postsgrid_changes.posts =
      /*posts*/
      ctx[1];
      postsgrid.$set(postsgrid_changes);
      var pagination1_changes = {};
      if (dirty &
      /*number*/
      1) pagination1_changes.pageCount =
      /*number*/
      ctx[0];
      pagination1.$set(pagination1_changes);

      if (
      /*isFetching*/
      ctx[2]) {
        if (if_block) {
          if (dirty &
          /*isFetching*/
          4) {
            transition_in(if_block, 1);
          }
        } else {
          if_block = create_if_block(ctx);
          if_block.c();
          transition_in(if_block, 1);
          if_block.m(if_block_anchor.parentNode, if_block_anchor);
        }
      } else if (if_block) {
        group_outros();
        transition_out(if_block, 1, 1, function () {
          if_block = null;
        });
        check_outros();
      }
    },
    i: function intro(local) {
      if (current) return;
      transition_in(pagination0.$$.fragment, local);
      transition_in(postsgrid.$$.fragment, local);
      transition_in(pagination1.$$.fragment, local);
      transition_in(if_block);
      current = true;
    },
    o: function outro(local) {
      transition_out(pagination0.$$.fragment, local);
      transition_out(postsgrid.$$.fragment, local);
      transition_out(pagination1.$$.fragment, local);
      transition_out(if_block);
      current = false;
    },
    d: function destroy(detaching) {
      if (detaching) detach_dev(t0);
      destroy_component(pagination0, detaching);
      if (detaching) detach_dev(t1);
      destroy_component(postsgrid, detaching);
      if (detaching) detach_dev(t2);
      destroy_component(pagination1, detaching);
      if (detaching) detach_dev(t3);
      if (if_block) if_block.d(detaching);
      if (detaching) detach_dev(if_block_anchor);
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

function preload(_x) {
  return _preload.apply(this, arguments);
}

function _preload() {
  _preload = _asyncToGenerator( /*#__PURE__*/regenerator.mark(function _callee5(page) {
    var number, handleOffline, handleOnline, _handleOnline, isOnline, data, posts;

    return regenerator.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            _handleOnline = function _handleOnline3() {
              _handleOnline = _asyncToGenerator( /*#__PURE__*/regenerator.mark(function _callee4() {
                var data, res;
                return regenerator.wrap(function _callee4$(_context4) {
                  while (1) {
                    switch (_context4.prev = _context4.next) {
                      case 0:
                        _context4.next = 2;
                        return fetch("https://dev.to/api/articles?page=".concat(number));

                      case 2:
                        res = _context4.sent;
                        _context4.next = 5;
                        return res.json();

                      case 5:
                        data = _context4.sent;
                        localStorage.setItem("posts" + number, JSON.stringify(data));
                        return _context4.abrupt("return", data);

                      case 8:
                      case "end":
                        return _context4.stop();
                    }
                  }
                }, _callee4);
              }));
              return _handleOnline.apply(this, arguments);
            };

            handleOnline = function _handleOnline2() {
              return _handleOnline.apply(this, arguments);
            };

            handleOffline = function _handleOffline() {
              var posts = JSON.parse(localStorage.getItem("posts" + number));
              if (!posts.length) throw new Error("Error on local storage!");
              return posts;
            };

            number = page.params.number;
            // init
            isOnline = navigator.onLine;
            posts = [];

            if (!isOnline) {
              _context5.next = 12;
              break;
            }

            _context5.next = 9;
            return handleOnline();

          case 9:
            data = _context5.sent;
            _context5.next = 13;
            break;

          case 12:
            data = handleOffline();

          case 13:
            posts = data.map(function (_d) {
              return Post(_d.id, _d.title, _d.description, _d["tag_list"], _d["cover_image"]);
            });
            return _context5.abrupt("return", {
              posts: posts,
              number: number
            });

          case 15:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5);
  }));
  return _preload.apply(this, arguments);
}

function instance($$self, $$props, $$invalidate) {
  var posts = $$props.posts;
  var number = $$props.number;
  var isOnline;
  var isFetching = true;
  onMount(function () {
    $$invalidate(2, isFetching = false);
  });

  function getPost(_x2) {
    return _getPost.apply(this, arguments);
  }

  function _getPost() {
    _getPost = _asyncToGenerator( /*#__PURE__*/regenerator.mark(function _callee(id) {
      return regenerator.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return goto("/articles/".concat(id));

            case 2:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));
    return _getPost.apply(this, arguments);
  }

  function nextPage() {
    return _nextPage.apply(this, arguments);
  }

  function _nextPage() {
    _nextPage = _asyncToGenerator( /*#__PURE__*/regenerator.mark(function _callee2() {
      return regenerator.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              // paginationStore.nextPage();
              $$invalidate(2, isFetching = true);
              _context2.next = 3;
              return goto("/page/".concat($$invalidate(0, ++number)));

            case 3:
              $$invalidate(2, isFetching = false);

            case 4:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }));
    return _nextPage.apply(this, arguments);
  }

  function prevPage() {
    return _prevPage.apply(this, arguments);
  }

  function _prevPage() {
    _prevPage = _asyncToGenerator( /*#__PURE__*/regenerator.mark(function _callee3() {
      return regenerator.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              if (!(number <= 0)) {
                _context3.next = 2;
                break;
              }

              return _context3.abrupt("return");

            case 2:
              // paginationStore.prevPage();
              $$invalidate(2, isFetching = true);
              _context3.next = 5;
              return goto("/page/".concat($$invalidate(0, --number)));

            case 5:
              $$invalidate(2, isFetching = false);

            case 6:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3);
    }));
    return _prevPage.apply(this, arguments);
  }

  var writable_props = ["posts", "number"];
  Object.keys($$props).forEach(function (key) {
    if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn("<U5Bnumberu5D> was created with unknown prop '".concat(key, "'"));
  });
  var _$$props$$$slots = $$props.$$slots,
      $$slots = _$$props$$$slots === void 0 ? {} : _$$props$$$slots,
      $$scope = $$props.$$scope;
  validate_slots("U5Bnumberu5D", $$slots, []);

  var getpost_handler = function getpost_handler(e) {
    return getPost(e.detail);
  };

  $$self.$set = function ($$props) {
    if ("posts" in $$props) $$invalidate(1, posts = $$props.posts);
    if ("number" in $$props) $$invalidate(0, number = $$props.number);
  };

  $$self.$capture_state = function () {
    return {
      preload: preload,
      onMount: onMount,
      goto: goto,
      PostsGrid: PostsGrid,
      Pagination: Pagination,
      LoadingOverlay: LoadingOverlay,
      Post: Post,
      posts: posts,
      number: number,
      isOnline: isOnline,
      isFetching: isFetching,
      getPost: getPost,
      nextPage: nextPage,
      prevPage: prevPage
    };
  };

  $$self.$inject_state = function ($$props) {
    if ("posts" in $$props) $$invalidate(1, posts = $$props.posts);
    if ("number" in $$props) $$invalidate(0, number = $$props.number);
    if ("isOnline" in $$props) isOnline = $$props.isOnline;
    if ("isFetching" in $$props) $$invalidate(2, isFetching = $$props.isFetching);
  };

  if ($$props && "$$inject" in $$props) {
    $$self.$inject_state($$props.$$inject);
  }

  return [number, posts, isFetching, getPost, nextPage, prevPage, isOnline, getpost_handler];
}

var U5Bnumberu5D = /*#__PURE__*/function (_SvelteComponentDev) {
  _inherits(U5Bnumberu5D, _SvelteComponentDev);

  var _super = _createSuper(U5Bnumberu5D);

  function U5Bnumberu5D(options) {
    var _this;

    _classCallCheck(this, U5Bnumberu5D);

    _this = _super.call(this, options);
    init(_assertThisInitialized(_this), options, instance, create_fragment, safe_not_equal, {
      posts: 1,
      number: 0
    });
    dispatch_dev("SvelteRegisterComponent", {
      component: _assertThisInitialized(_this),
      tagName: "U5Bnumberu5D",
      options: options,
      id: create_fragment.name
    });
    var ctx = _this.$$.ctx;
    var props = options.props || {};

    if (
    /*posts*/
    ctx[1] === undefined && !("posts" in props)) {
      console.warn("<U5Bnumberu5D> was created without expected prop 'posts'");
    }

    if (
    /*number*/
    ctx[0] === undefined && !("number" in props)) {
      console.warn("<U5Bnumberu5D> was created without expected prop 'number'");
    }

    return _this;
  }

  _createClass(U5Bnumberu5D, [{
    key: "posts",
    get: function get() {
      throw new Error_1("<U5Bnumberu5D>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    },
    set: function set(value) {
      throw new Error_1("<U5Bnumberu5D>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    }
  }, {
    key: "number",
    get: function get() {
      throw new Error_1("<U5Bnumberu5D>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    },
    set: function set(value) {
      throw new Error_1("<U5Bnumberu5D>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    }
  }]);

  return U5Bnumberu5D;
}(SvelteComponentDev);

export default U5Bnumberu5D;
export { preload };
