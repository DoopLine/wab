import { _ as _inherits, a as _getPrototypeOf, b as _possibleConstructorReturn, c as _classCallCheck, i as init, s as safe_not_equal, d as _assertThisInitialized, e as dispatch_dev, f as _createClass, S as SvelteComponentDev, v as validate_each_argument, g as validate_slots, h as element, t as text, j as claim_element, k as children, l as claim_text, m as detach_dev, n as attr_dev, o as add_location, p as insert_dev, q as append_dev, r as set_data_dev, u as space, w as claim_space, x as listen_dev, y as _slicedToArray, z as noop, A as destroy_each, B as bubble, C as validate_store, D as component_subscribe, E as onMount, F as goto, G as paginationStore, L as LoadingOverlay, H as create_component, I as claim_component, J as mount_component, K as transition_in, M as transition_out, N as destroy_component, O as empty, P as query_selector_all, Q as group_outros, R as check_outros, T as _asyncToGenerator, U as regenerator } from './client.8bd9bda1.js';
import { P as Post } from './Post.a5d586c7.js';
import { P as PostsGrid, B as Button, a as Pagination } from './Pagination.a1c4fcc2.js';

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function () { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }
var file = "src\\components\\home\\PostHero.svelte";

function get_each_context(ctx, list, i) {
  var child_ctx = ctx.slice();
  child_ctx[2] = list[i];
  return child_ctx;
} // (24:4) {#each post.tags as tag}


function create_each_block(ctx) {
  var small;
  var t_value =
  /*tag*/
  ctx[2] + "";
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
      add_location(small, file, 24, 6, 800);
    },
    m: function mount(target, anchor) {
      insert_dev(target, small, anchor);
      append_dev(small, t);
    },
    p: function update(ctx, dirty) {
      if (dirty &
      /*post*/
      1 && t_value !== (t_value =
      /*tag*/
      ctx[2] + "")) set_data_dev(t, t_value);
    },
    d: function destroy(detaching) {
      if (detaching) detach_dev(small);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_each_block.name,
    type: "each",
    source: "(24:4) {#each post.tags as tag}",
    ctx: ctx
  });
  return block;
}

function create_fragment(ctx) {
  var header;
  var img;
  var img_src_value;
  var img_alt_value;
  var t0;
  var div;
  var t1;
  var span;
  var t2;
  var h1;
  var t3_value =
  /*post*/
  ctx[0].title + "";
  var t3;
  var t4;
  var h3;
  var t5_value =
  /*post*/
  ctx[0].desc + "";
  var t5;
  var dispose;
  var each_value =
  /*post*/
  ctx[0].tags;
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
      t3 = text(t3_value);
      t4 = space();
      h3 = element("h3");
      t5 = text(t5_value);
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
      t3 = claim_text(h1_nodes, t3_value);
      h1_nodes.forEach(detach_dev);
      t4 = claim_space(header_nodes);
      h3 = claim_element(header_nodes, "H3", {
        class: true
      });
      var h3_nodes = children(h3);
      t5 = claim_text(h3_nodes, t5_value);
      h3_nodes.forEach(detach_dev);
      header_nodes.forEach(detach_dev);
      this.h();
    },
    h: function hydrate() {
      attr_dev(img, "class", "absolute top-0 left-0 w-full h-full object-cover pointer-events-none");
      if (img.src !== (img_src_value =
      /*post*/
      ctx[0].img)) attr_dev(img, "src", img_src_value);
      attr_dev(img, "alt", img_alt_value =
      /*post*/
      ctx[0].title);
      add_location(img, file, 15, 2, 469);
      attr_dev(div, "class", "absolute top-0 left-0 w-full h-full bg-black opacity-50\r\n    pointer-events-none");
      add_location(div, file, 19, 2, 604);
      attr_dev(span, "class", "relative flex flex-wrap justify-center");
      add_location(span, file, 22, 2, 709);
      attr_dev(h1, "class", "relative text-4xl md:text-6xl font-bold");
      add_location(h1, file, 27, 2, 866);
      attr_dev(h3, "class", "relative text-gray-100 text-lg px-4 pb-4");
      add_location(h3, file, 28, 2, 939);
      attr_dev(header, "class", "relative cursor-pointer flex max-w-screen-xl flex-col justify-center\r\n  items-center mb-20 -mt-20 py-20 px-10 text-white text-center");
      add_location(header, file, 11, 0, 301);
    },
    m: function mount(target, anchor, remount) {
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
      append_dev(header, t4);
      append_dev(header, h3);
      append_dev(h3, t5);
      if (remount) dispose();
      dispose = listen_dev(header, "click",
      /*click_handler*/
      ctx[1], false, false, false);
    },
    p: function update(ctx, _ref) {
      var _ref2 = _slicedToArray(_ref, 1),
          dirty = _ref2[0];

      if (dirty &
      /*post*/
      1 && img.src !== (img_src_value =
      /*post*/
      ctx[0].img)) {
        attr_dev(img, "src", img_src_value);
      }

      if (dirty &
      /*post*/
      1 && img_alt_value !== (img_alt_value =
      /*post*/
      ctx[0].title)) {
        attr_dev(img, "alt", img_alt_value);
      }

      if (dirty &
      /*post*/
      1) {
        each_value =
        /*post*/
        ctx[0].tags;
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
      /*post*/
      1 && t3_value !== (t3_value =
      /*post*/
      ctx[0].title + "")) set_data_dev(t3, t3_value);
      if (dirty &
      /*post*/
      1 && t5_value !== (t5_value =
      /*post*/
      ctx[0].desc + "")) set_data_dev(t5, t5_value);
    },
    i: noop,
    o: noop,
    d: function destroy(detaching) {
      if (detaching) detach_dev(header);
      destroy_each(each_blocks, detaching);
      dispose();
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
  var _$$props$post = $$props.post,
      post = _$$props$post === void 0 ? Post() : _$$props$post;
  var writable_props = ["post"];
  Object.keys($$props).forEach(function (key) {
    if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn("<PostHero> was created with unknown prop '".concat(key, "'"));
  });
  var _$$props$$$slots = $$props.$$slots,
      $$slots = _$$props$$$slots === void 0 ? {} : _$$props$$$slots,
      $$scope = $$props.$$scope;
  validate_slots("PostHero", $$slots, []);

  function click_handler(event) {
    bubble($$self, event);
  }

  $$self.$set = function ($$props) {
    if ("post" in $$props) $$invalidate(0, post = $$props.post);
  };

  $$self.$capture_state = function () {
    return {
      Post: Post,
      post: post
    };
  };

  $$self.$inject_state = function ($$props) {
    if ("post" in $$props) $$invalidate(0, post = $$props.post);
  };

  if ($$props && "$$inject" in $$props) {
    $$self.$inject_state($$props.$$inject);
  }

  return [post, click_handler];
}

var PostHero = /*#__PURE__*/function (_SvelteComponentDev) {
  _inherits(PostHero, _SvelteComponentDev);

  var _super = _createSuper(PostHero);

  function PostHero(options) {
    var _this;

    _classCallCheck(this, PostHero);

    _this = _super.call(this, options);
    init(_assertThisInitialized(_this), options, instance, create_fragment, safe_not_equal, {
      post: 0
    });
    dispatch_dev("SvelteRegisterComponent", {
      component: _assertThisInitialized(_this),
      tagName: "PostHero",
      options: options,
      id: create_fragment.name
    });
    return _this;
  }

  _createClass(PostHero, [{
    key: "post",
    get: function get() {
      throw new Error("<PostHero>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    },
    set: function set(value) {
      throw new Error("<PostHero>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    }
  }]);

  return PostHero;
}(SvelteComponentDev);

function _createSuper$1(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct$1(); return function () { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct$1() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function create_default_slot(ctx) {
  var t;
  var block = {
    c: function create() {
      t = text("Ver mais");
    },
    l: function claim(nodes) {
      t = claim_text(nodes, "Ver mais");
    },
    m: function mount(target, anchor) {
      insert_dev(target, t, anchor);
    },
    d: function destroy(detaching) {
      if (detaching) detach_dev(t);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_default_slot.name,
    type: "slot",
    source: "(59:0) <Button on:click={() => goto('/page/1')} className=\\\"items-center mt-4 mx-auto\\\">",
    ctx: ctx
  });
  return block;
} // (63:0) {#if isFetching}


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
    source: "(63:0) {#if isFetching}",
    ctx: ctx
  });
  return block;
}

function create_fragment$1(ctx) {
  var t0;
  var t1;
  var t2;
  var t3;
  var if_block_anchor;
  var current;
  var posthero = new PostHero({
    props: {
      post:
      /*posts*/
      ctx[0][0]
    },
    $$inline: true
  });
  posthero.$on("click",
  /*click_handler*/
  ctx[6]);
  var postsgrid = new PostsGrid({
    props: {
      posts:
      /*posts*/
      ctx[0].slice(1)
    },
    $$inline: true
  });
  postsgrid.$on("getpost",
  /*getpost_handler*/
  ctx[7]);
  var button = new Button({
    props: {
      className: "items-center mt-4 mx-auto",
      $$slots: {
        default: [create_default_slot]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  button.$on("click",
  /*click_handler_1*/
  ctx[8]);
  var if_block =
  /*isFetching*/
  ctx[1] && create_if_block(ctx);
  var block = {
    c: function create() {
      t0 = space();
      create_component(posthero.$$.fragment);
      t1 = space();
      create_component(postsgrid.$$.fragment);
      t2 = space();
      create_component(button.$$.fragment);
      t3 = space();
      if (if_block) if_block.c();
      if_block_anchor = empty();
      this.h();
    },
    l: function claim(nodes) {
      var head_nodes = query_selector_all("[data-svelte=\"svelte-yzlqez\"]", document.head);
      head_nodes.forEach(detach_dev);
      t0 = claim_space(nodes);
      claim_component(posthero.$$.fragment, nodes);
      t1 = claim_space(nodes);
      claim_component(postsgrid.$$.fragment, nodes);
      t2 = claim_space(nodes);
      claim_component(button.$$.fragment, nodes);
      t3 = claim_space(nodes);
      if (if_block) if_block.l(nodes);
      if_block_anchor = empty();
      this.h();
    },
    h: function hydrate() {
      document.title = "WAB - WorkAttack Blog";
    },
    m: function mount(target, anchor) {
      insert_dev(target, t0, anchor);
      mount_component(posthero, target, anchor);
      insert_dev(target, t1, anchor);
      mount_component(postsgrid, target, anchor);
      insert_dev(target, t2, anchor);
      mount_component(button, target, anchor);
      insert_dev(target, t3, anchor);
      if (if_block) if_block.m(target, anchor);
      insert_dev(target, if_block_anchor, anchor);
      current = true;
    },
    p: function update(ctx, _ref) {
      var _ref2 = _slicedToArray(_ref, 1),
          dirty = _ref2[0];

      var posthero_changes = {};
      if (dirty &
      /*posts*/
      1) posthero_changes.post =
      /*posts*/
      ctx[0][0];
      posthero.$set(posthero_changes);
      var postsgrid_changes = {};
      if (dirty &
      /*posts*/
      1) postsgrid_changes.posts =
      /*posts*/
      ctx[0].slice(1);
      postsgrid.$set(postsgrid_changes);
      var button_changes = {};

      if (dirty &
      /*$$scope*/
      512) {
        button_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      button.$set(button_changes);

      if (
      /*isFetching*/
      ctx[1]) {
        if (if_block) {
          if (dirty &
          /*isFetching*/
          2) {
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
      transition_in(posthero.$$.fragment, local);
      transition_in(postsgrid.$$.fragment, local);
      transition_in(button.$$.fragment, local);
      transition_in(if_block);
      current = true;
    },
    o: function outro(local) {
      transition_out(posthero.$$.fragment, local);
      transition_out(postsgrid.$$.fragment, local);
      transition_out(button.$$.fragment, local);
      transition_out(if_block);
      current = false;
    },
    d: function destroy(detaching) {
      if (detaching) detach_dev(t0);
      destroy_component(posthero, detaching);
      if (detaching) detach_dev(t1);
      destroy_component(postsgrid, detaching);
      if (detaching) detach_dev(t2);
      destroy_component(button, detaching);
      if (detaching) detach_dev(t3);
      if (if_block) if_block.d(detaching);
      if (detaching) detach_dev(if_block_anchor);
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

function handleOnline() {
  return _handleOnline.apply(this, arguments);
}

function _handleOnline() {
  _handleOnline = _asyncToGenerator( /*#__PURE__*/regenerator.mark(function _callee3() {
    var data, res;
    return regenerator.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.next = 2;
            return fetch("https://dev.to/api/articles?page=1");

          case 2:
            res = _context3.sent;
            _context3.next = 5;
            return res.json();

          case 5:
            data = _context3.sent;
            localStorage.setItem("posts1", JSON.stringify(data));
            return _context3.abrupt("return", data.slice(0, 5));

          case 8:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));
  return _handleOnline.apply(this, arguments);
}

function instance$1($$self, $$props, $$invalidate) {
  var $paginationStore;
  validate_store(paginationStore, "paginationStore");
  component_subscribe($$self, paginationStore, function ($$value) {
    return $$invalidate(4, $paginationStore = $$value);
  });
  var isOnline;
  var posts = [];
  var isFetching = true;
  onMount( /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regenerator.mark(function _callee() {
    var data;
    return regenerator.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            isOnline = navigator.onLine;
            $$invalidate(1, isFetching = true);

            if (!isOnline) {
              _context.next = 8;
              break;
            }

            _context.next = 5;
            return handleOnline();

          case 5:
            data = _context.sent;
            _context.next = 9;
            break;

          case 8:
            data = handleOffline();

          case 9:
            $$invalidate(0, posts = data.map(function (_d) {
              return Post(_d.id, _d.title, _d.description, _d["tag_list"], _d["cover_image"]);
            }));
            $$invalidate(1, isFetching = false);

          case 11:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  })));

  function getPost(_x) {
    return _getPost.apply(this, arguments);
  }

  function _getPost() {
    _getPost = _asyncToGenerator( /*#__PURE__*/regenerator.mark(function _callee2(id) {
      return regenerator.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return goto("/articles/".concat(id));

            case 2:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }));
    return _getPost.apply(this, arguments);
  }

  function handleOffline() {
    var posts = JSON.parse(localStorage.getItem("posts" + $paginationStore));
    if (!posts.length) throw new Error("Error on local storage!");
    return posts.slice(0, 5);
  }

  var writable_props = [];
  Object.keys($$props).forEach(function (key) {
    if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn("<Routes> was created with unknown prop '".concat(key, "'"));
  });
  var _$$props$$$slots = $$props.$$slots,
      $$slots = _$$props$$$slots === void 0 ? {} : _$$props$$$slots,
      $$scope = $$props.$$scope;
  validate_slots("Routes", $$slots, []);

  var click_handler = function click_handler(e) {
    return getPost(posts[0].id);
  };

  var getpost_handler = function getpost_handler(e) {
    return getPost(e.detail);
  };

  var click_handler_1 = function click_handler_1() {
    return goto("/page/1");
  };

  $$self.$capture_state = function () {
    return {
      onMount: onMount,
      goto: goto,
      PostHero: PostHero,
      paginationStore: paginationStore,
      PostsGrid: PostsGrid,
      Pagination: Pagination,
      LoadingOverlay: LoadingOverlay,
      Button: Button,
      Post: Post,
      isOnline: isOnline,
      posts: posts,
      isFetching: isFetching,
      handleOnline: handleOnline,
      getPost: getPost,
      handleOffline: handleOffline,
      $paginationStore: $paginationStore
    };
  };

  $$self.$inject_state = function ($$props) {
    if ("isOnline" in $$props) isOnline = $$props.isOnline;
    if ("posts" in $$props) $$invalidate(0, posts = $$props.posts);
    if ("isFetching" in $$props) $$invalidate(1, isFetching = $$props.isFetching);
  };

  if ($$props && "$$inject" in $$props) {
    $$self.$inject_state($$props.$$inject);
  }

  return [posts, isFetching, getPost, isOnline, $paginationStore, handleOffline, click_handler, getpost_handler, click_handler_1];
}

var Routes = /*#__PURE__*/function (_SvelteComponentDev) {
  _inherits(Routes, _SvelteComponentDev);

  var _super = _createSuper$1(Routes);

  function Routes(options) {
    var _this;

    _classCallCheck(this, Routes);

    _this = _super.call(this, options);
    init(_assertThisInitialized(_this), options, instance$1, create_fragment$1, safe_not_equal, {});
    dispatch_dev("SvelteRegisterComponent", {
      component: _assertThisInitialized(_this),
      tagName: "Routes",
      options: options,
      id: create_fragment$1.name
    });
    return _this;
  }

  return Routes;
}(SvelteComponentDev);

export default Routes;
