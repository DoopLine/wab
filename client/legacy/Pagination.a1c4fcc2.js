import { _ as _inherits, a as _getPrototypeOf, b as _possibleConstructorReturn, c as _classCallCheck, i as init, s as safe_not_equal, d as _assertThisInitialized, e as dispatch_dev, f as _createClass, S as SvelteComponentDev, v as validate_each_argument, V as createEventDispatcher, g as validate_slots, h as element, j as claim_element, n as attr_dev, o as add_location, p as insert_dev, x as listen_dev, m as detach_dev, t as text, k as children, l as claim_text, q as append_dev, r as set_data_dev, u as space, w as claim_space, y as _slicedToArray, z as noop, A as destroy_each, B as bubble, H as create_component, I as claim_component, J as mount_component, K as transition_in, M as transition_out, N as destroy_component, Q as group_outros, R as check_outros, W as create_slot, X as null_to_empty, Y as get_slot_context, Z as get_slot_changes, $ as prop_dev } from './client.8bd9bda1.js';

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function () { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }
var file = "src\\components\\PostCard.svelte";

function get_each_context(ctx, list, i) {
  var child_ctx = ctx.slice();
  child_ctx[3] = list[i];
  return child_ctx;
} // (23:4) {#if post.img}


function create_if_block(ctx) {
  var img;
  var img_src_value;
  var dispose;
  var block = {
    c: function create() {
      img = element("img");
      this.h();
    },
    l: function claim(nodes) {
      img = claim_element(nodes, "IMG", {
        loading: true,
        class: true,
        src: true,
        alt: true
      });
      this.h();
    },
    h: function hydrate() {
      attr_dev(img, "loading", "lazy");
      attr_dev(img, "class", "mb-3");
      if (img.src !== (img_src_value =
      /*post*/
      ctx[0].img)) attr_dev(img, "src", img_src_value);
      attr_dev(img, "alt", "teste");
      add_location(img, file, 23, 6, 590);
    },
    m: function mount(target, anchor, remount) {
      insert_dev(target, img, anchor);
      if (remount) dispose();
      dispose = listen_dev(img, "error", imgLoadError, false, false, false);
    },
    p: function update(ctx, dirty) {
      if (dirty &
      /*post*/
      1 && img.src !== (img_src_value =
      /*post*/
      ctx[0].img)) {
        attr_dev(img, "src", img_src_value);
      }
    },
    d: function destroy(detaching) {
      if (detaching) detach_dev(img);
      dispose();
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_if_block.name,
    type: "if",
    source: "(23:4) {#if post.img}",
    ctx: ctx
  });
  return block;
} // (32:6) {#each post.tags as tag}


function create_each_block(ctx) {
  var p;
  var t_value =
  /*tag*/
  ctx[3] + "";
  var t;
  var block = {
    c: function create() {
      p = element("p");
      t = text(t_value);
      this.h();
    },
    l: function claim(nodes) {
      p = claim_element(nodes, "P", {
        class: true
      });
      var p_nodes = children(p);
      t = claim_text(p_nodes, t_value);
      p_nodes.forEach(detach_dev);
      this.h();
    },
    h: function hydrate() {
      attr_dev(p, "class", "font-semibold text-primary-400 my-1 mx-2");
      add_location(p, file, 32, 8, 813);
    },
    m: function mount(target, anchor) {
      insert_dev(target, p, anchor);
      append_dev(p, t);
    },
    p: function update(ctx, dirty) {
      if (dirty &
      /*post*/
      1 && t_value !== (t_value =
      /*tag*/
      ctx[3] + "")) set_data_dev(t, t_value);
    },
    d: function destroy(detaching) {
      if (detaching) detach_dev(p);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_each_block.name,
    type: "each",
    source: "(32:6) {#each post.tags as tag}",
    ctx: ctx
  });
  return block;
}

function create_fragment(ctx) {
  var article;
  var div;
  var t0;
  var span;
  var t1;
  var h1;
  var t2_value =
  /*post*/
  ctx[0].title + "";
  var t2;
  var t3;
  var h3;
  var t4_value = truncate(
  /*post*/
  ctx[0].desc) + "";
  var t4;
  var dispose;
  var if_block =
  /*post*/
  ctx[0].img && create_if_block(ctx);
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
      article = element("article");
      div = element("div");
      if (if_block) if_block.c();
      t0 = space();
      span = element("span");

      for (var _i = 0; _i < each_blocks.length; _i += 1) {
        each_blocks[_i].c();
      }

      t1 = space();
      h1 = element("h1");
      t2 = text(t2_value);
      t3 = space();
      h3 = element("h3");
      t4 = text(t4_value);
      this.h();
    },
    l: function claim(nodes) {
      article = claim_element(nodes, "ARTICLE", {
        class: true
      });
      var article_nodes = children(article);
      div = claim_element(article_nodes, "DIV", {
        class: true
      });
      var div_nodes = children(div);
      if (if_block) if_block.l(div_nodes);
      t0 = claim_space(div_nodes);
      span = claim_element(div_nodes, "SPAN", {
        class: true
      });
      var span_nodes = children(span);

      for (var _i2 = 0; _i2 < each_blocks.length; _i2 += 1) {
        each_blocks[_i2].l(span_nodes);
      }

      span_nodes.forEach(detach_dev);
      t1 = claim_space(div_nodes);
      h1 = claim_element(div_nodes, "H1", {
        class: true
      });
      var h1_nodes = children(h1);
      t2 = claim_text(h1_nodes, t2_value);
      h1_nodes.forEach(detach_dev);
      t3 = claim_space(div_nodes);
      h3 = claim_element(div_nodes, "H3", {
        class: true
      });
      var h3_nodes = children(h3);
      t4 = claim_text(h3_nodes, t4_value);
      h3_nodes.forEach(detach_dev);
      div_nodes.forEach(detach_dev);
      article_nodes.forEach(detach_dev);
      this.h();
    },
    h: function hydrate() {
      attr_dev(span, "class", "flex flex-wrap m-2");
      add_location(span, file, 30, 4, 738);
      attr_dev(h1, "class", "text-2xl text-primary-800 font-bold mb-1 px-4");
      add_location(h1, file, 35, 4, 908);
      attr_dev(h3, "class", "text-primary-700 text-lg px-4 pb-4");
      add_location(h3, file, 36, 4, 989);
      attr_dev(div, "class", "shadow-xs cursor-pointer");
      add_location(div, file, 21, 2, 515);
      attr_dev(article, "class", "w-full md:w-1/3 break-words p-4 ");
      add_location(article, file, 20, 0, 461);
    },
    m: function mount(target, anchor, remount) {
      insert_dev(target, article, anchor);
      append_dev(article, div);
      if (if_block) if_block.m(div, null);
      append_dev(div, t0);
      append_dev(div, span);

      for (var _i3 = 0; _i3 < each_blocks.length; _i3 += 1) {
        each_blocks[_i3].m(span, null);
      }

      append_dev(div, t1);
      append_dev(div, h1);
      append_dev(h1, t2);
      append_dev(div, t3);
      append_dev(div, h3);
      append_dev(h3, t4);
      if (remount) dispose();
      dispose = listen_dev(div, "click",
      /*click_handler*/
      ctx[2], false, false, false);
    },
    p: function update(ctx, _ref) {
      var _ref2 = _slicedToArray(_ref, 1),
          dirty = _ref2[0];

      if (
      /*post*/
      ctx[0].img) {
        if (if_block) {
          if_block.p(ctx, dirty);
        } else {
          if_block = create_if_block(ctx);
          if_block.c();
          if_block.m(div, t0);
        }
      } else if (if_block) {
        if_block.d(1);
        if_block = null;
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
      1 && t2_value !== (t2_value =
      /*post*/
      ctx[0].title + "")) set_data_dev(t2, t2_value);
      if (dirty &
      /*post*/
      1 && t4_value !== (t4_value = truncate(
      /*post*/
      ctx[0].desc) + "")) set_data_dev(t4, t4_value);
    },
    i: noop,
    o: noop,
    d: function destroy(detaching) {
      if (detaching) detach_dev(article);
      if (if_block) if_block.d();
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

function truncate() {
  var string = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
  if (string.length < 120) return string;
  var trucatedString = string.substring(0, 120);
  return trucatedString.endsWith("...") ? trucatedString : trucatedString + "...";
}

function imgLoadError(e) {
  e.target.src = "/successkid.jpg";
}

function instance($$self, $$props, $$invalidate) {
  var post = $$props.post;
  var dispatch = createEventDispatcher();
  var writable_props = ["post"];
  Object.keys($$props).forEach(function (key) {
    if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn("<PostCard> was created with unknown prop '".concat(key, "'"));
  });
  var _$$props$$$slots = $$props.$$slots,
      $$slots = _$$props$$$slots === void 0 ? {} : _$$props$$$slots,
      $$scope = $$props.$$scope;
  validate_slots("PostCard", $$slots, []);

  function click_handler(event) {
    bubble($$self, event);
  }

  $$self.$set = function ($$props) {
    if ("post" in $$props) $$invalidate(0, post = $$props.post);
  };

  $$self.$capture_state = function () {
    return {
      createEventDispatcher: createEventDispatcher,
      post: post,
      dispatch: dispatch,
      truncate: truncate,
      imgLoadError: imgLoadError
    };
  };

  $$self.$inject_state = function ($$props) {
    if ("post" in $$props) $$invalidate(0, post = $$props.post);
  };

  if ($$props && "$$inject" in $$props) {
    $$self.$inject_state($$props.$$inject);
  }

  return [post, dispatch, click_handler];
}

var PostCard = /*#__PURE__*/function (_SvelteComponentDev) {
  _inherits(PostCard, _SvelteComponentDev);

  var _super = _createSuper(PostCard);

  function PostCard(options) {
    var _this;

    _classCallCheck(this, PostCard);

    _this = _super.call(this, options);
    init(_assertThisInitialized(_this), options, instance, create_fragment, safe_not_equal, {
      post: 0
    });
    dispatch_dev("SvelteRegisterComponent", {
      component: _assertThisInitialized(_this),
      tagName: "PostCard",
      options: options,
      id: create_fragment.name
    });
    var ctx = _this.$$.ctx;
    var props = options.props || {};

    if (
    /*post*/
    ctx[0] === undefined && !("post" in props)) {
      console.warn("<PostCard> was created without expected prop 'post'");
    }

    return _this;
  }

  _createClass(PostCard, [{
    key: "post",
    get: function get() {
      throw new Error("<PostCard>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    },
    set: function set(value) {
      throw new Error("<PostCard>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    }
  }]);

  return PostCard;
}(SvelteComponentDev);

function _createSuper$1(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct$1(); return function () { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct$1() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }
var file$1 = "src\\components\\PostsGrid.svelte";

function get_each_context$1(ctx, list, i) {
  var child_ctx = ctx.slice();
  child_ctx[3] = list[i];
  return child_ctx;
} // (16:2) {#each posts as post}


function create_each_block$1(ctx) {
  var current;

  function click_handler() {
    var _ctx;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return (
      /*click_handler*/
      (_ctx = ctx)[2].apply(_ctx, [
      /*post*/
      ctx[3]].concat(args))
    );
  }

  var postcard = new PostCard({
    props: {
      post:
      /*post*/
      ctx[3]
    },
    $$inline: true
  });
  postcard.$on("click", click_handler);
  var block = {
    c: function create() {
      create_component(postcard.$$.fragment);
    },
    l: function claim(nodes) {
      claim_component(postcard.$$.fragment, nodes);
    },
    m: function mount(target, anchor) {
      mount_component(postcard, target, anchor);
      current = true;
    },
    p: function update(new_ctx, dirty) {
      ctx = new_ctx;
      var postcard_changes = {};
      if (dirty &
      /*posts*/
      1) postcard_changes.post =
      /*post*/
      ctx[3];
      postcard.$set(postcard_changes);
    },
    i: function intro(local) {
      if (current) return;
      transition_in(postcard.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(postcard.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(postcard, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_each_block$1.name,
    type: "each",
    source: "(16:2) {#each posts as post}",
    ctx: ctx
  });
  return block;
}

function create_fragment$1(ctx) {
  var section;
  var current;
  var each_value =
  /*posts*/
  ctx[0];
  validate_each_argument(each_value);
  var each_blocks = [];

  for (var i = 0; i < each_value.length; i += 1) {
    each_blocks[i] = create_each_block$1(get_each_context$1(ctx, each_value, i));
  }

  var out = function out(i) {
    return transition_out(each_blocks[i], 1, 1, function () {
      each_blocks[i] = null;
    });
  };

  var block = {
    c: function create() {
      section = element("section");

      for (var _i = 0; _i < each_blocks.length; _i += 1) {
        each_blocks[_i].c();
      }

      this.h();
    },
    l: function claim(nodes) {
      section = claim_element(nodes, "SECTION", {
        class: true
      });
      var section_nodes = children(section);

      for (var _i2 = 0; _i2 < each_blocks.length; _i2 += 1) {
        each_blocks[_i2].l(section_nodes);
      }

      section_nodes.forEach(detach_dev);
      this.h();
    },
    h: function hydrate() {
      attr_dev(section, "class", "flex flex-wrap");
      add_location(section, file$1, 14, 0, 396);
    },
    m: function mount(target, anchor) {
      insert_dev(target, section, anchor);

      for (var _i3 = 0; _i3 < each_blocks.length; _i3 += 1) {
        each_blocks[_i3].m(section, null);
      }

      current = true;
    },
    p: function update(ctx, _ref) {
      var _ref2 = _slicedToArray(_ref, 1),
          dirty = _ref2[0];

      if (dirty &
      /*posts, dispatch*/
      3) {
        each_value =
        /*posts*/
        ctx[0];
        validate_each_argument(each_value);

        var _i4;

        for (_i4 = 0; _i4 < each_value.length; _i4 += 1) {
          var child_ctx = get_each_context$1(ctx, each_value, _i4);

          if (each_blocks[_i4]) {
            each_blocks[_i4].p(child_ctx, dirty);

            transition_in(each_blocks[_i4], 1);
          } else {
            each_blocks[_i4] = create_each_block$1(child_ctx);

            each_blocks[_i4].c();

            transition_in(each_blocks[_i4], 1);

            each_blocks[_i4].m(section, null);
          }
        }

        group_outros();

        for (_i4 = each_value.length; _i4 < each_blocks.length; _i4 += 1) {
          out(_i4);
        }

        check_outros();
      }
    },
    i: function intro(local) {
      if (current) return;

      for (var _i5 = 0; _i5 < each_value.length; _i5 += 1) {
        transition_in(each_blocks[_i5]);
      }

      current = true;
    },
    o: function outro(local) {
      each_blocks = each_blocks.filter(Boolean);

      for (var _i6 = 0; _i6 < each_blocks.length; _i6 += 1) {
        transition_out(each_blocks[_i6]);
      }

      current = false;
    },
    d: function destroy(detaching) {
      if (detaching) detach_dev(section);
      destroy_each(each_blocks, detaching);
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

function instance$1($$self, $$props, $$invalidate) {
  var _$$props$posts = $$props.posts,
      posts = _$$props$posts === void 0 ? [] : _$$props$posts;
  var dispatch = createEventDispatcher();
  var writable_props = ["posts"];
  Object.keys($$props).forEach(function (key) {
    if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn("<PostsGrid> was created with unknown prop '".concat(key, "'"));
  });
  var _$$props$$$slots = $$props.$$slots,
      $$slots = _$$props$$$slots === void 0 ? {} : _$$props$$$slots,
      $$scope = $$props.$$scope;
  validate_slots("PostsGrid", $$slots, []);

  var click_handler = function click_handler(post) {
    return dispatch("getpost", post.id);
  };

  $$self.$set = function ($$props) {
    if ("posts" in $$props) $$invalidate(0, posts = $$props.posts);
  };

  $$self.$capture_state = function () {
    return {
      createEventDispatcher: createEventDispatcher,
      PostCard: PostCard,
      posts: posts,
      dispatch: dispatch
    };
  };

  $$self.$inject_state = function ($$props) {
    if ("posts" in $$props) $$invalidate(0, posts = $$props.posts);
  };

  if ($$props && "$$inject" in $$props) {
    $$self.$inject_state($$props.$$inject);
  }

  return [posts, dispatch, click_handler];
}

var PostsGrid = /*#__PURE__*/function (_SvelteComponentDev) {
  _inherits(PostsGrid, _SvelteComponentDev);

  var _super = _createSuper$1(PostsGrid);

  function PostsGrid(options) {
    var _this;

    _classCallCheck(this, PostsGrid);

    _this = _super.call(this, options);
    init(_assertThisInitialized(_this), options, instance$1, create_fragment$1, safe_not_equal, {
      posts: 0
    });
    dispatch_dev("SvelteRegisterComponent", {
      component: _assertThisInitialized(_this),
      tagName: "PostsGrid",
      options: options,
      id: create_fragment$1.name
    });
    return _this;
  }

  _createClass(PostsGrid, [{
    key: "posts",
    get: function get() {
      throw new Error("<PostsGrid>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    },
    set: function set(value) {
      throw new Error("<PostsGrid>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    }
  }]);

  return PostsGrid;
}(SvelteComponentDev);

function _createSuper$2(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct$2(); return function () { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct$2() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }
var file$2 = "src\\components\\Button.svelte"; // (21:8) lorem

function fallback_block(ctx) {
  var t;
  var block = {
    c: function create() {
      t = text("lorem");
    },
    l: function claim(nodes) {
      t = claim_text(nodes, "lorem");
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
    id: fallback_block.name,
    type: "fallback",
    source: "(21:8) lorem",
    ctx: ctx
  });
  return block;
}

function create_fragment$2(ctx) {
  var button;
  var button_class_value;
  var current;
  var dispose;
  var default_slot_template =
  /*$$slots*/
  ctx[3].default;
  var default_slot = create_slot(default_slot_template, ctx,
  /*$$scope*/
  ctx[2], null);
  var default_slot_or_fallback = default_slot || fallback_block(ctx);
  var block = {
    c: function create() {
      button = element("button");
      if (default_slot_or_fallback) default_slot_or_fallback.c();
      this.h();
    },
    l: function claim(nodes) {
      button = claim_element(nodes, "BUTTON", {
        disabled: true,
        class: true
      });
      var button_nodes = children(button);
      if (default_slot_or_fallback) default_slot_or_fallback.l(button_nodes);
      button_nodes.forEach(detach_dev);
      this.h();
    },
    h: function hydrate() {
      button.disabled =
      /*disabled*/
      ctx[1];
      attr_dev(button, "class", button_class_value = "" + (null_to_empty("w-auto border-none bg-primary-500 hover:bg-primary-700 px-6 py-2 text-white transition duration-300 ease-in-out" + " " +
      /*className*/
      ctx[0]) + " svelte-1xbzcz8"));
      add_location(button, file$2, 16, 0, 780);
    },
    m: function mount(target, anchor, remount) {
      insert_dev(target, button, anchor);

      if (default_slot_or_fallback) {
        default_slot_or_fallback.m(button, null);
      }

      current = true;
      if (remount) dispose();
      dispose = listen_dev(button, "click",
      /*click_handler*/
      ctx[4], false, false, false);
    },
    p: function update(ctx, _ref) {
      var _ref2 = _slicedToArray(_ref, 1),
          dirty = _ref2[0];

      if (default_slot) {
        if (default_slot.p && dirty &
        /*$$scope*/
        4) {
          default_slot.p(get_slot_context(default_slot_template, ctx,
          /*$$scope*/
          ctx[2], null), get_slot_changes(default_slot_template,
          /*$$scope*/
          ctx[2], dirty, null));
        }
      }

      if (!current || dirty &
      /*disabled*/
      2) {
        prop_dev(button, "disabled",
        /*disabled*/
        ctx[1]);
      }

      if (!current || dirty &
      /*className*/
      1 && button_class_value !== (button_class_value = "" + (null_to_empty("w-auto border-none bg-primary-500 hover:bg-primary-700 px-6 py-2 text-white transition duration-300 ease-in-out" + " " +
      /*className*/
      ctx[0]) + " svelte-1xbzcz8"))) {
        attr_dev(button, "class", button_class_value);
      }
    },
    i: function intro(local) {
      if (current) return;
      transition_in(default_slot_or_fallback, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(default_slot_or_fallback, local);
      current = false;
    },
    d: function destroy(detaching) {
      if (detaching) detach_dev(button);
      if (default_slot_or_fallback) default_slot_or_fallback.d(detaching);
      dispose();
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_fragment$2.name,
    type: "component",
    source: "",
    ctx: ctx
  });
  return block;
}

function instance$2($$self, $$props, $$invalidate) {
  var className = $$props.className;
  var _$$props$disabled = $$props.disabled,
      disabled = _$$props$disabled === void 0 ? false : _$$props$disabled;
  var writable_props = ["className", "disabled"];
  Object.keys($$props).forEach(function (key) {
    if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn("<Button> was created with unknown prop '".concat(key, "'"));
  });
  var _$$props$$$slots = $$props.$$slots,
      $$slots = _$$props$$$slots === void 0 ? {} : _$$props$$$slots,
      $$scope = $$props.$$scope;
  validate_slots("Button", $$slots, ['default']);

  function click_handler(event) {
    bubble($$self, event);
  }

  $$self.$set = function ($$props) {
    if ("className" in $$props) $$invalidate(0, className = $$props.className);
    if ("disabled" in $$props) $$invalidate(1, disabled = $$props.disabled);
    if ("$$scope" in $$props) $$invalidate(2, $$scope = $$props.$$scope);
  };

  $$self.$capture_state = function () {
    return {
      className: className,
      disabled: disabled
    };
  };

  $$self.$inject_state = function ($$props) {
    if ("className" in $$props) $$invalidate(0, className = $$props.className);
    if ("disabled" in $$props) $$invalidate(1, disabled = $$props.disabled);
  };

  if ($$props && "$$inject" in $$props) {
    $$self.$inject_state($$props.$$inject);
  }

  return [className, disabled, $$scope, $$slots, click_handler];
}

var Button = /*#__PURE__*/function (_SvelteComponentDev) {
  _inherits(Button, _SvelteComponentDev);

  var _super = _createSuper$2(Button);

  function Button(options) {
    var _this;

    _classCallCheck(this, Button);

    _this = _super.call(this, options);
    init(_assertThisInitialized(_this), options, instance$2, create_fragment$2, safe_not_equal, {
      className: 0,
      disabled: 1
    });
    dispatch_dev("SvelteRegisterComponent", {
      component: _assertThisInitialized(_this),
      tagName: "Button",
      options: options,
      id: create_fragment$2.name
    });
    var ctx = _this.$$.ctx;
    var props = options.props || {};

    if (
    /*className*/
    ctx[0] === undefined && !("className" in props)) {
      console.warn("<Button> was created without expected prop 'className'");
    }

    return _this;
  }

  _createClass(Button, [{
    key: "className",
    get: function get() {
      throw new Error("<Button>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    },
    set: function set(value) {
      throw new Error("<Button>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    }
  }, {
    key: "disabled",
    get: function get() {
      throw new Error("<Button>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    },
    set: function set(value) {
      throw new Error("<Button>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    }
  }]);

  return Button;
}(SvelteComponentDev);

function _createSuper$3(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct$3(); return function () { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct$3() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }
var file$3 = "src\\components\\Pagination.svelte"; // (16:2) <Button      disabled={pageCount <= 1}      on:click={() => dispatch('prev')}      className="mx-2">

function create_default_slot_1(ctx) {
  var t;
  var block = {
    c: function create() {
      t = text("Anterior");
    },
    l: function claim(nodes) {
      t = claim_text(nodes, "Anterior");
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
    id: create_default_slot_1.name,
    type: "slot",
    source: "(16:2) <Button      disabled={pageCount <= 1}      on:click={() => dispatch('prev')}      className=\\\"mx-2\\\">",
    ctx: ctx
  });
  return block;
} // (25:2) <Button on:click={() => dispatch('next')} className="mx-2">


function create_default_slot(ctx) {
  var t;
  var block = {
    c: function create() {
      t = text("Proximo");
    },
    l: function claim(nodes) {
      t = claim_text(nodes, "Proximo");
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
    source: "(25:2) <Button on:click={() => dispatch('next')} className=\\\"mx-2\\\">",
    ctx: ctx
  });
  return block;
}

function create_fragment$3(ctx) {
  var section;
  var t0;
  var span;
  var t1;
  var t2;
  var current;
  var button0 = new Button({
    props: {
      disabled:
      /*pageCount*/
      ctx[0] <= 1,
      className: "mx-2",
      $$slots: {
        default: [create_default_slot_1]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  button0.$on("click",
  /*click_handler*/
  ctx[2]);
  var button1 = new Button({
    props: {
      className: "mx-2",
      $$slots: {
        default: [create_default_slot]
      },
      $$scope: {
        ctx: ctx
      }
    },
    $$inline: true
  });
  button1.$on("click",
  /*click_handler_1*/
  ctx[3]);
  var block = {
    c: function create() {
      section = element("section");
      create_component(button0.$$.fragment);
      t0 = space();
      span = element("span");
      t1 = text(
      /*pageCount*/
      ctx[0]);
      t2 = space();
      create_component(button1.$$.fragment);
      this.h();
    },
    l: function claim(nodes) {
      section = claim_element(nodes, "SECTION", {
        class: true
      });
      var section_nodes = children(section);
      claim_component(button0.$$.fragment, section_nodes);
      t0 = claim_space(section_nodes);
      span = claim_element(section_nodes, "SPAN", {
        class: true
      });
      var span_nodes = children(span);
      t1 = claim_text(span_nodes,
      /*pageCount*/
      ctx[0]);
      span_nodes.forEach(detach_dev);
      t2 = claim_space(section_nodes);
      claim_component(button1.$$.fragment, section_nodes);
      section_nodes.forEach(detach_dev);
      this.h();
    },
    h: function hydrate() {
      attr_dev(span, "class", "w-auto border-none bg-primary-400 px-6 py-2 text-white text-lg");
      add_location(span, file$3, 21, 2, 586);
      attr_dev(section, "class", "flex justify-center items-center my-8 ");
      add_location(section, file$3, 14, 0, 395);
    },
    m: function mount(target, anchor) {
      insert_dev(target, section, anchor);
      mount_component(button0, section, null);
      append_dev(section, t0);
      append_dev(section, span);
      append_dev(span, t1);
      append_dev(section, t2);
      mount_component(button1, section, null);
      current = true;
    },
    p: function update(ctx, _ref) {
      var _ref2 = _slicedToArray(_ref, 1),
          dirty = _ref2[0];

      var button0_changes = {};
      if (dirty &
      /*pageCount*/
      1) button0_changes.disabled =
      /*pageCount*/
      ctx[0] <= 1;

      if (dirty &
      /*$$scope*/
      16) {
        button0_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      button0.$set(button0_changes);
      if (!current || dirty &
      /*pageCount*/
      1) set_data_dev(t1,
      /*pageCount*/
      ctx[0]);
      var button1_changes = {};

      if (dirty &
      /*$$scope*/
      16) {
        button1_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      button1.$set(button1_changes);
    },
    i: function intro(local) {
      if (current) return;
      transition_in(button0.$$.fragment, local);
      transition_in(button1.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(button0.$$.fragment, local);
      transition_out(button1.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      if (detaching) detach_dev(section);
      destroy_component(button0);
      destroy_component(button1);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_fragment$3.name,
    type: "component",
    source: "",
    ctx: ctx
  });
  return block;
}

function instance$3($$self, $$props, $$invalidate) {
  var _$$props$pageCount = $$props.pageCount,
      pageCount = _$$props$pageCount === void 0 ? 1 : _$$props$pageCount;
  var dispatch = createEventDispatcher();
  var writable_props = ["pageCount"];
  Object.keys($$props).forEach(function (key) {
    if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn("<Pagination> was created with unknown prop '".concat(key, "'"));
  });
  var _$$props$$$slots = $$props.$$slots,
      $$slots = _$$props$$$slots === void 0 ? {} : _$$props$$$slots,
      $$scope = $$props.$$scope;
  validate_slots("Pagination", $$slots, []);

  var click_handler = function click_handler() {
    return dispatch("prev");
  };

  var click_handler_1 = function click_handler_1() {
    return dispatch("next");
  };

  $$self.$set = function ($$props) {
    if ("pageCount" in $$props) $$invalidate(0, pageCount = $$props.pageCount);
  };

  $$self.$capture_state = function () {
    return {
      createEventDispatcher: createEventDispatcher,
      Button: Button,
      pageCount: pageCount,
      dispatch: dispatch
    };
  };

  $$self.$inject_state = function ($$props) {
    if ("pageCount" in $$props) $$invalidate(0, pageCount = $$props.pageCount);
  };

  if ($$props && "$$inject" in $$props) {
    $$self.$inject_state($$props.$$inject);
  }

  return [pageCount, dispatch, click_handler, click_handler_1];
}

var Pagination = /*#__PURE__*/function (_SvelteComponentDev) {
  _inherits(Pagination, _SvelteComponentDev);

  var _super = _createSuper$3(Pagination);

  function Pagination(options) {
    var _this;

    _classCallCheck(this, Pagination);

    _this = _super.call(this, options);
    init(_assertThisInitialized(_this), options, instance$3, create_fragment$3, safe_not_equal, {
      pageCount: 0
    });
    dispatch_dev("SvelteRegisterComponent", {
      component: _assertThisInitialized(_this),
      tagName: "Pagination",
      options: options,
      id: create_fragment$3.name
    });
    return _this;
  }

  _createClass(Pagination, [{
    key: "pageCount",
    get: function get() {
      throw new Error("<Pagination>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    },
    set: function set(value) {
      throw new Error("<Pagination>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    }
  }]);

  return Pagination;
}(SvelteComponentDev);

export { Button as B, PostsGrid as P, Pagination as a };
