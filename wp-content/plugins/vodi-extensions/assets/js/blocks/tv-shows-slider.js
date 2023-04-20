(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

var _PostSelector = require("../components/PostSelector");

var _DesignOptions = require("../components/DesignOptions");

var _Repeater = require("../components/Repeater");

var _ImageUpload = require("../components/ImageUpload");

const {
  __
} = wp.i18n;
const {
  registerBlockType
} = wp.blocks;
const {
  InspectorControls
} = wp.blockEditor;
const {
  Fragment
} = wp.element;
const {
  Disabled,
  PanelBody
} = wp.components;
const {
  serverSideRender: ServerSideRender
} = wp;
registerBlockType('vodi/tv-shows-slider', {
  title: __('TV Shows Slider', 'vodi-extensions'),
  icon: 'welcome-view-site',
  category: 'vodi-blocks',
  edit: props => {
    const {
      attributes,
      setAttributes
    } = props;
    const {
      sliders,
      design_options
    } = attributes;

    const onChangeSliders = newSliders => {
      setAttributes({
        sliders: JSON.stringify([...newSliders])
      });
    };

    const onChangeSlidersIds = (newIds, index) => {
      var sliders_updated = JSON.parse(sliders);
      sliders_updated[index].tv_show_id = newIds.join(',');
      setAttributes({
        sliders: JSON.stringify([...sliders_updated])
      });
    };

    const onChangeSlidersBgImage = (media, index) => {
      var sliders_updated = JSON.parse(sliders);
      sliders_updated[index].bg_image = media.id;
      setAttributes({
        sliders: JSON.stringify([...sliders_updated])
      });
    };

    const onChangeDesignOptions = newDesignOptions => {
      setAttributes({
        design_options: { ...design_options,
          ...newDesignOptions
        }
      });
    };

    return wp.element.createElement(Fragment, null, wp.element.createElement(InspectorControls, null, wp.element.createElement(_Repeater.Repeater, {
      title: __('Sliders', 'vodi-extensions'),
      values: sliders ? JSON.parse(sliders) : [],
      defaultValues: {
        tv_show_id: '',
        bg_image: ''
      },
      updateValues: onChangeSliders
    }, wp.element.createElement(_PostSelector.PostSelector, {
      postType: "tv_show",
      selectSingle: true,
      name: "tv_show_id",
      valuekey: "selectedPostIds",
      selectedPostIds: "",
      trigger_method_name: "updateSelectedPostIds",
      updateSelectedPostIds: onChangeSlidersIds
    }), wp.element.createElement(_ImageUpload.ImageUpload, {
      addImageLabel: __('Pick an Background Image', 'vodi-extensions'),
      replaceImageLabel: __('Replace Background Image', 'vodi-extensions'),
      removeImageLabel: __('Remove Background Image', 'vodi-extensions'),
      name: "bg_image",
      valuekey: "value",
      value: "",
      trigger_method_name: "onSelect",
      onSelect: onChangeSlidersBgImage
    })), wp.element.createElement(PanelBody, {
      title: __('Design Options', 'vodi-extensions'),
      initialOpen: false
    }, wp.element.createElement(_DesignOptions.DesignOptions, {
      attributes: { ...design_options
      },
      updateDesignOptions: onChangeDesignOptions
    }))), wp.element.createElement(Disabled, null, sliders ? wp.element.createElement(ServerSideRender, {
      block: "vodi/tv-shows-slider",
      attributes: attributes
    }) : __('Add sliders', 'vodi-extensions')));
  },

  save() {
    // Rendering in PHP
    return null;
  }

});

},{"../components/DesignOptions":2,"../components/ImageUpload":3,"../components/PostSelector":6,"../components/Repeater":7}],2:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DesignOptions = void 0;
const {
  __
} = wp.i18n;
const {
  Component
} = wp.element;
const {
  RangeControl
} = wp.components;
/**
 * DesignOptions Component
 */

class DesignOptions extends Component {
  /**
   * Constructor for DesignOptions Component.
   * Sets up state, and creates bindings for functions.
   * @param object props - current component properties.
   */
  constructor(props) {
    super(...arguments);
    this.props = props;
    this.onChangePaddingTop = this.onChangePaddingTop.bind(this);
    this.onChangePaddingBottom = this.onChangePaddingBottom.bind(this);
    this.onChangePaddingLeft = this.onChangePaddingLeft.bind(this);
    this.onChangePaddingRight = this.onChangePaddingRight.bind(this);
    this.onChangeMarginTop = this.onChangeMarginTop.bind(this);
    this.onChangeMarginBottom = this.onChangeMarginBottom.bind(this);
  }

  onChangePaddingTop(newonChangePaddingTop) {
    this.props.updateDesignOptions({
      padding_top: newonChangePaddingTop
    });
  }

  onChangePaddingBottom(newonChangePaddingBottom) {
    this.props.updateDesignOptions({
      padding_bottom: newonChangePaddingBottom
    });
  }

  onChangePaddingLeft(newonChangePaddingLeft) {
    this.props.updateDesignOptions({
      padding_left: newonChangePaddingLeft
    });
  }

  onChangePaddingRight(newonChangePaddingRight) {
    this.props.updateDesignOptions({
      padding_right: newonChangePaddingRight
    });
  }

  onChangeMarginTop(newonChangeMarginTop) {
    this.props.updateDesignOptions({
      margin_top: newonChangeMarginTop
    });
  }

  onChangeMarginBottom(newonChangeMarginBottom) {
    this.props.updateDesignOptions({
      margin_bottom: newonChangeMarginBottom
    });
  }
  /**
   * Renders the DesignOptions component.
   */


  render() {
    const {
      attributes
    } = this.props;
    const {
      padding_top,
      padding_bottom,
      padding_left,
      padding_right,
      margin_top,
      margin_bottom
    } = attributes;
    return wp.element.createElement("div", null, wp.element.createElement(RangeControl, {
      label: __('Padding Top (px)', 'vodi-extensions'),
      value: padding_top,
      onChange: this.onChangePaddingTop,
      min: 0,
      max: 100
    }), wp.element.createElement(RangeControl, {
      label: __('Padding Bottom (px)', 'vodi-extensions'),
      value: padding_bottom,
      onChange: this.onChangePaddingBottom,
      min: 0,
      max: 100
    }), wp.element.createElement(RangeControl, {
      label: __('Padding Left (px)', 'vodi-extensions'),
      value: padding_left,
      onChange: this.onChangePaddingLeft,
      min: 0,
      max: 100
    }), wp.element.createElement(RangeControl, {
      label: __('Padding Right (px)', 'vodi-extensions'),
      value: padding_right,
      onChange: this.onChangePaddingRight,
      min: 0,
      max: 100
    }), wp.element.createElement(RangeControl, {
      label: __('Margin Top (px)', 'vodi-extensions'),
      value: margin_top,
      onChange: this.onChangeMarginTop,
      min: -100,
      max: 100
    }), wp.element.createElement(RangeControl, {
      label: __('Margin Bottom (px)', 'vodi-extensions'),
      value: margin_bottom,
      onChange: this.onChangeMarginBottom,
      min: -100,
      max: 100
    }));
  }

}

exports.DesignOptions = DesignOptions;

},{}],3:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ImageUpload = void 0;
const {
  __
} = wp.i18n;
const {
  MediaUpload
} = wp.blockEditor;
const {
  Fragment,
  Component
} = wp.element;
const {
  Button
} = wp.components;
/**
 * ImageUpload Component
 */

class ImageUpload extends Component {
  /**
   * Constructor for ImageUpload Component.
   * Sets up state, and creates bindings for functions.
   * @param object props - current component properties.
   */
  constructor(props) {
    super(...arguments);
    this.props = props;
    this.onChangeImage = this.onChangeImage.bind(this);
    this.onRemoveImage = this.onRemoveImage.bind(this);
  }

  onChangeImage(media) {
    this.props.onSelect(media);
  }

  onRemoveImage() {
    this.props.onSelect(0);
  }
  /**
   * Renders the ImageUpload component.
   */


  render() {
    const {
      attributes,
      addImageLabel,
      replaceImageLabel,
      removeImageLabel,
      value
    } = this.props;
    return wp.element.createElement("div", {
      className: "components-base-control components-image-upload"
    }, wp.element.createElement("div", {
      className: "components-base-control__field"
    }, wp.element.createElement(MediaUpload, {
      onSelect: this.onChangeImage,
      type: "image",
      value: value,
      render: _ref => {
        let {
          open
        } = _ref;
        return wp.element.createElement("div", {
          className: "button-container"
        }, wp.element.createElement(Button, {
          isSecondary: true,
          isLarge: true,
          onClick: open,
          style: {
            marginBottom: '.5rem'
          }
        }, value ? replaceImageLabel : addImageLabel));
      }
    })), value ? wp.element.createElement("div", {
      className: "components-base-control__field"
    }, wp.element.createElement("div", {
      className: "button-container"
    }, wp.element.createElement(Button, {
      isSecondary: true,
      isLarge: true,
      onClick: this.onRemoveImage,
      style: {
        marginBottom: '.5rem'
      }
    }, removeImageLabel))) : '');
  }

}

exports.ImageUpload = ImageUpload;

},{}],4:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Item = void 0;

/**
 * Item Component.
 *
 * @param {string} itemTitle - Current item title.
 * @param {function} clickHandler - this is the handling function for the add/remove function
 * @param {Integer} itemId - Current item ID
 * @param icon
 * @returns {*} Item HTML.
 */
const Item = _ref => {
  let {
    title: {
      rendered: itemTitle
    } = {},
    name,
    clickHandler,
    id: itemId,
    icon
  } = _ref;
  return wp.element.createElement("article", {
    className: "item"
  }, wp.element.createElement("div", {
    className: "item-body"
  }, wp.element.createElement("h3", {
    className: "item-title",
    style: {
      marginTop: '0'
    }
  }, itemTitle, name)), wp.element.createElement("button", {
    onClick: () => clickHandler(itemId)
  }, icon));
};

exports.Item = Item;

},{}],5:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ItemList = void 0;

var _Item = require("./Item");

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

const {
  __
} = wp.i18n;
/**
 * ItemList Component
 * @param object props - Component props.
 * @returns {*}
 * @constructor
 */

const ItemList = props => {
  const {
    filtered = false,
    loading = false,
    items = [],
    action = () => {},
    icon = null
  } = props;

  if (loading) {
    return wp.element.createElement("p", {
      className: "loading-items"
    }, __('Loading ...', 'vodi-extensions'));
  }

  if (filtered && items.length < 1) {
    return wp.element.createElement("div", {
      className: "item-list"
    }, wp.element.createElement("p", null, __('Your query yielded no results, please try again.', 'vodi-extensions')));
  }

  if (!items || items.length < 1) {
    return wp.element.createElement("p", {
      className: "no-items"
    }, __('Not found.', 'vodi-extensions'));
  }

  return wp.element.createElement("div", {
    className: "item-list"
  }, items.map(item => wp.element.createElement(_Item.Item, _extends({
    key: item.id
  }, item, {
    clickHandler: action,
    icon: icon
  }))));
};

exports.ItemList = ItemList;

},{"./Item":4}],6:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PostSelector = void 0;

var _ItemList = require("./ItemList");

var api = _interopRequireWildcard(require("../utils/api"));

var _usefulFuncs = require("../utils/useful-funcs");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

const {
  __
} = wp.i18n;
const {
  Icon
} = wp.components;
const {
  Component
} = wp.element;
/**
 * PostSelector Component
 */

class PostSelector extends Component {
  /**
   * Constructor for PostSelector Component.
   * Sets up state, and creates bindings for functions.
   * @param object props - current component properties.
   */
  constructor(props) {
    super(...arguments);
    this.props = props;
    this.state = {
      posts: [],
      loading: false,
      type: props.postType || 'post',
      types: [],
      filter: '',
      filterLoading: false,
      filterPosts: [],
      initialLoading: false,
      selectedPosts: []
    };
    this.addPost = this.addPost.bind(this);
    this.removePost = this.removePost.bind(this);
    this.handleInputFilterChange = this.handleInputFilterChange.bind(this);
    this.doPostFilter = (0, _usefulFuncs.debounce)(this.doPostFilter.bind(this), 300);
    this.getSelectedPostIds = this.getSelectedPostIds.bind(this);
    this.getSelectedPosts = this.getSelectedPosts.bind(this);
  }
  /**
   * When the component mounts it calls this function.
   * Fetches posts types, selected posts then makes first call for posts
   */


  componentDidMount() {
    this.setState({
      initialLoading: true
    });
    api.getPostTypes().then(response => {
      this.setState({
        types: response
      }, () => {
        this.retrieveSelectedPosts().then(selectedPosts => {
          if (selectedPosts) {
            this.setState({
              initialLoading: false,
              selectedPosts: selectedPosts
            });
          } else {
            this.setState({
              initialLoading: false
            });
          }
        });
      });
    });
  }
  /**
   * GetPosts wrapper, builds the request argument based state and parameters passed/
   * @param {object} args - desired arguments (can be empty).
   * @returns {Promise<T>}
   */


  getPosts() {
    let args = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    const postIds = this.getSelectedPostIds();
    const defaultArgs = {
      per_page: 10,
      type: this.state.type,
      search: this.state.filter
    };
    const requestArguments = { ...defaultArgs,
      ...args
    };
    requestArguments.restBase = this.state.types[this.state.type].rest_base;
    return api.getPosts(requestArguments).then(response => {
      if (requestArguments.search) {
        this.setState({
          filterPosts: response.filter(_ref => {
            let {
              id
            } = _ref;
            return postIds.indexOf(id) === -1;
          })
        });
        return response;
      }

      this.setState({
        posts: (0, _usefulFuncs.uniqueById)([...this.state.posts, ...response])
      }); // return response to continue the chain

      return response;
    });
  }
  /**
   * Gets the selected posts by id from the `posts` state object and sorts them by their position in the selected array.
   * @returns Array of objects.
   */


  getSelectedPostIds() {
    const {
      selectedPostIds
    } = this.props;

    if (selectedPostIds) {
      const postIds = Array.isArray(selectedPostIds) ? selectedPostIds : selectedPostIds.split(',');
      return postIds;
    }

    return [];
  }
  /**
   * Gets the selected posts by id from the `posts` state object and sorts them by their position in the selected array.
   * @returns Array of objects.
   */


  getSelectedPosts(postIds) {
    // const filterPostsList = this.state.filtering && !this.state.filterLoading ? this.state.filterPosts : [];
    const postList = (0, _usefulFuncs.uniqueById)([...this.state.filterPosts, ...this.state.posts]);
    const selectedPosts = postList.filter(_ref2 => {
      let {
        id
      } = _ref2;
      return postIds.indexOf(id) !== -1;
    }).sort((a, b) => {
      const aIndex = postIds.indexOf(a.id);
      const bIndex = postIds.indexOf(b.id);

      if (aIndex > bIndex) {
        return 1;
      }

      if (aIndex < bIndex) {
        return -1;
      }

      return 0;
    });
    this.setState({
      selectedPosts: selectedPosts
    });
  }
  /**
   * Makes the necessary api calls to fetch the selected posts and returns a promise.
   * @returns {*}
   */


  retrieveSelectedPosts() {
    const {
      postType,
      selectedPostIds
    } = this.props;
    const {
      types
    } = this.state;
    const postIds = this.getSelectedPostIds().join(',');

    if (!postIds) {
      // return a fake promise that auto resolves.
      return new Promise(resolve => resolve());
    }

    let post_args = {
      include: postIds,
      per_page: 100,
      postType
    };

    if (this.props.postStatus) {
      post_args.status = this.props.postStatus;
    }

    return this.getPosts({ ...post_args
    });
  }
  /**
   * Adds desired post id to the selectedPostIds List
   * @param {Integer} post_id
   */


  addPost(post_id) {
    if (this.state.filter) {
      const post = this.state.filterPosts.filter(p => p.id === post_id);
      const posts = (0, _usefulFuncs.uniqueById)([...this.state.posts, ...post]);
      this.setState({
        posts
      });
    }

    if (this.props.selectSingle) {
      const selectedPostIds = [post_id];
      this.props.updateSelectedPostIds(selectedPostIds);
      this.getSelectedPosts(selectedPostIds);
    } else {
      const postIds = this.getSelectedPostIds();
      const selectedPostIds = [...postIds, post_id];
      this.props.updateSelectedPostIds(selectedPostIds);
      this.getSelectedPosts(selectedPostIds);
    }
  }
  /**
   * Removes desired post id to the selectedPostIds List
   * @param {Integer} post_id
   */


  removePost(post_id) {
    const postIds = this.getSelectedPostIds();
    const selectedPostIds = [...postIds].filter(id => id !== post_id);
    this.props.updateSelectedPostIds(selectedPostIds);
    this.getSelectedPosts(selectedPostIds);
  }
  /**
   * Handles the search box input value
   * @param string type - comes from the event object target.
   */


  handleInputFilterChange() {
    let {
      target: {
        value: filter = ''
      } = {}
    } = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    this.setState({
      filter
    }, () => {
      if (!filter) {
        // remove filtered posts
        return this.setState({
          filteredPosts: [],
          filtering: false
        });
      }

      this.doPostFilter();
    });
  }
  /**
   * Actual api call for searching for query, this function is debounced in constructor.
   */


  doPostFilter() {
    const {
      filter = ''
    } = this.state;

    if (!filter) {
      return;
    }

    this.setState({
      filtering: true,
      filterLoading: true
    });
    let post_args = {};

    if (this.props.postStatus) {
      post_args.status = this.props.postStatus;
    }

    this.getPosts({ ...post_args
    }).then(() => {
      this.setState({
        filterLoading: false
      });
    });
  }
  /**
   * Renders the PostSelector component.
   */


  render() {
    const postList = this.state.filtering && !this.state.filterLoading ? this.state.filterPosts : [];
    const addIcon = wp.element.createElement(Icon, {
      icon: "plus"
    });
    const removeIcon = wp.element.createElement(Icon, {
      icon: "minus"
    });
    const searchinputuniqueId = 'searchinput-' + Math.random().toString(36).substr(2, 16);
    return wp.element.createElement("div", {
      className: "components-base-control components-post-selector"
    }, wp.element.createElement("div", {
      className: "components-base-control__field--selected"
    }, wp.element.createElement("h2", null, __('Search Post', 'vodi-extensions')), wp.element.createElement(_ItemList.ItemList, {
      items: [...this.state.selectedPosts],
      loading: this.state.initialLoading,
      action: this.removePost,
      icon: removeIcon
    })), wp.element.createElement("div", {
      className: "components-base-control__field"
    }, wp.element.createElement("label", {
      htmlFor: searchinputuniqueId,
      className: "components-base-control__label"
    }, wp.element.createElement(Icon, {
      icon: "search"
    })), wp.element.createElement("input", {
      className: "components-text-control__input",
      id: searchinputuniqueId,
      type: "search",
      placeholder: __('Please enter your search query...', 'vodi-extensions'),
      value: this.state.filter,
      onChange: this.handleInputFilterChange
    }), wp.element.createElement(_ItemList.ItemList, {
      items: postList,
      loading: this.state.initialLoading || this.state.loading || this.state.filterLoading,
      filtered: this.state.filtering,
      action: this.addPost,
      icon: addIcon
    })));
  }

}

exports.PostSelector = PostSelector;

},{"../utils/api":8,"../utils/useful-funcs":9,"./ItemList":5}],7:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Repeater = void 0;
const {
  __
} = wp.i18n;
const {
  Component,
  Children
} = wp.element;
const {
  Panel,
  Button,
  Icon
} = wp.components;
/**
 * Repeater Component
 */

class Repeater extends Component {
  /**
   * Constructor for Repeater Component.
   * Sets up state, and creates bindings for functions.
   * @param object props - current component properties.
   */
  constructor(props) {
    super(...arguments);
    this.props = props;
    this.renderAddButton = this.renderAddButton.bind(this);
    this.renderRemoveButton = this.renderRemoveButton.bind(this);
    this.handleAdd = this.handleAdd.bind(this);
    this.handleRemove = this.handleRemove.bind(this);
    this.renderChildrenElements = this.renderChildrenElements.bind(this);
  }

  renderAddButton() {
    return wp.element.createElement(Button, {
      isDefault: true,
      className: "button-fullwidth",
      onClick: this.handleAdd
    }, wp.element.createElement(Icon, {
      icon: "plus"
    }));
  }

  renderRemoveButton() {
    return wp.element.createElement(Button, {
      isDestructive: true,
      className: "button-remove",
      onClick: this.handleRemove
    }, wp.element.createElement(Icon, {
      icon: "dismiss"
    }));
  }

  handleAdd() {
    const {
      defaultValues,
      updateValues
    } = this.props;
    const {
      values
    } = this.props;
    const current_values = values ? [...values, { ...defaultValues
    }] : [{ ...defaultValues
    }];
    updateValues(current_values);
  }

  handleRemove(index) {
    const {
      updateValues
    } = this.props;
    const {
      values
    } = this.props;
    const current_values = values.filter((value, i) => i != index);
    updateValues(current_values);
  }

  renderChildrenElements() {
    const {
      children
    } = this.props;
    const {
      values
    } = this.props;

    if (!values) {
      return [];
    }

    const remove_button = this.renderRemoveButton();
    return values.map((value, index) => {
      const updated_children = Children.map(children, child => {
        let child_props = { ...child.props
        };

        if (values[index][child.props.name]) {
          child_props[child.props.valuekey] = values[index][child.props.name];
        }

        child_props[child.props.trigger_method_name] = value => child.props[child.props.trigger_method_name](value, index);

        return React.cloneElement(child, { ...child_props
        });
      });
      const updated_remove_button = React.cloneElement(remove_button, {
        key: 'repeater-remove-' + index,
        onClick: () => remove_button.props['onClick'](index)
      });
      return React.createElement(Panel, {
        key: 'repeater-child-' + index
      }, [updated_children, updated_remove_button]);
    });
  }
  /**
   * Renders the Repeater component.
   */


  render() {
    return wp.element.createElement("div", {
      className: "components-base-control repeater-component"
    }, wp.element.createElement("div", {
      className: "components-base-control__field"
    }, wp.element.createElement("label", {
      className: "components-base-control__label"
    }, this.props.title), this.renderChildrenElements(), this.renderAddButton()));
  }

}

exports.Repeater = Repeater;

},{}],8:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getTerms = exports.getTaxonomies = exports.getPosts = exports.getPostTypes = void 0;
const {
  apiFetch
} = wp;
/**
 * Makes a get request to the PostTypes endpoint.
 *
 * @returns {Promise<any>}
 */

const getPostTypes = () => {
  return apiFetch({
    path: '/wp/v2/types'
  });
};
/**
 * Makes a get request to the desired post type and builds the query string based on an object.
 *
 * @param {string|boolean} restBase - rest base for the query.
 * @param {object} args
 * @returns {Promise<any>}
 */


exports.getPostTypes = getPostTypes;

const getPosts = _ref => {
  let {
    restBase = false,
    ...args
  } = _ref;
  const queryString = Object.keys(args).map(arg => `${arg}=${args[arg]}`).join('&');
  let path = `/wp/v2/${restBase}?${queryString}&_embed`;
  return apiFetch({
    path: path
  });
};
/**
 * Makes a get request to the PostType Taxonomies endpoint.
 *
 * @returns {Promise<any>}
 */


exports.getPosts = getPosts;

const getTaxonomies = _ref2 => {
  let { ...args
  } = _ref2;
  const queryString = Object.keys(args).map(arg => `${arg}=${args[arg]}`).join('&');
  let path = `/wp/v2/taxonomies?${queryString}&_embed`;
  return apiFetch({
    path: path
  });
};
/**
 * Makes a get request to the desired post type and builds the query string based on an object.
 *
 * @param {string|boolean} restBase - rest base for the query.
 * @param {object} args
 * @returns {Promise<any>}
 */


exports.getTaxonomies = getTaxonomies;

const getTerms = _ref3 => {
  let {
    restBase = false,
    ...args
  } = _ref3;
  const queryString = Object.keys(args).map(arg => `${arg}=${args[arg]}`).join('&');
  let path = `/wp/v2/${restBase}?${queryString}&_embed`;
  return apiFetch({
    path: path
  });
};

exports.getTerms = getTerms;

},{}],9:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.uniqueById = exports.uniqueBy = exports.debounce = void 0;

/**
 * Returns a unique array of objects based on a desired key.
 * @param {array} arr - array of objects.
 * @param {string|int} key - key to filter objects by
 */
const uniqueBy = (arr, key) => {
  let keys = [];
  return arr.filter(item => {
    if (keys.indexOf(item[key]) !== -1) {
      return false;
    }

    return keys.push(item[key]);
  });
};
/**
 * Returns a unique array of objects based on the id property.
 * @param {array} arr - array of objects to filter.
 * @returns {*}
 */


exports.uniqueBy = uniqueBy;

const uniqueById = arr => uniqueBy(arr, 'id');
/**
 * Debounce a function by limiting how often it can run.
 * @param {function} func - callback function
 * @param {Integer} wait - Time in milliseconds how long it should wait.
 * @returns {Function}
 */


exports.uniqueById = uniqueById;

const debounce = (func, wait) => {
  let timeout = null;
  return function () {
    const context = this;
    const args = arguments;

    const later = () => {
      func.apply(context, args);
    };

    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
};

exports.debounce = debounce;

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvcGx1Z2lucy92b2RpLWV4dGVuc2lvbnMvYXNzZXRzL2VzbmV4dC9ibG9ja3MvdHYtc2hvd3Mtc2xpZGVyLmpzIiwic3JjL3BsdWdpbnMvdm9kaS1leHRlbnNpb25zL2Fzc2V0cy9lc25leHQvY29tcG9uZW50cy9EZXNpZ25PcHRpb25zLmpzIiwic3JjL3BsdWdpbnMvdm9kaS1leHRlbnNpb25zL2Fzc2V0cy9lc25leHQvY29tcG9uZW50cy9JbWFnZVVwbG9hZC5qcyIsInNyYy9wbHVnaW5zL3ZvZGktZXh0ZW5zaW9ucy9hc3NldHMvZXNuZXh0L2NvbXBvbmVudHMvSXRlbS5qcyIsInNyYy9wbHVnaW5zL3ZvZGktZXh0ZW5zaW9ucy9hc3NldHMvZXNuZXh0L2NvbXBvbmVudHMvSXRlbUxpc3QuanMiLCJzcmMvcGx1Z2lucy92b2RpLWV4dGVuc2lvbnMvYXNzZXRzL2VzbmV4dC9jb21wb25lbnRzL1Bvc3RTZWxlY3Rvci5qcyIsInNyYy9wbHVnaW5zL3ZvZGktZXh0ZW5zaW9ucy9hc3NldHMvZXNuZXh0L2NvbXBvbmVudHMvUmVwZWF0ZXIuanMiLCJzcmMvcGx1Z2lucy92b2RpLWV4dGVuc2lvbnMvYXNzZXRzL2VzbmV4dC91dGlscy9hcGkuanMiLCJzcmMvcGx1Z2lucy92b2RpLWV4dGVuc2lvbnMvYXNzZXRzL2VzbmV4dC91dGlscy91c2VmdWwtZnVuY3MuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7OztBQ0FBOztBQUNBOztBQUNBOztBQUNBOztBQUVBLE1BQU07QUFBRSxFQUFBO0FBQUYsSUFBUyxFQUFFLENBQUMsSUFBbEI7QUFDQSxNQUFNO0FBQUUsRUFBQTtBQUFGLElBQXdCLEVBQUUsQ0FBQyxNQUFqQztBQUNBLE1BQU07QUFBRSxFQUFBO0FBQUYsSUFBd0IsRUFBRSxDQUFDLFdBQWpDO0FBQ0EsTUFBTTtBQUFFLEVBQUE7QUFBRixJQUFlLEVBQUUsQ0FB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LElBQUksR0FBRyxFQUFYO0FBQ0EsU0FBTyxHQUFHLENBQUMsTUFBSixDQUFXLElBQUksSUFBSTtBQUN0QixRQUFJLElBQUksQ0FBQyxPQUFMLENBQWEsSUFBSSxDQUFDLEdBQUQsQ0FBakIsTUFBNEIsQ0FBQyxDQUFqQyxFQUFvQztBQUNoQyxhQUFPLEtBQVA7QUFDSDs7QUFFRCxXQUFPLElBQUksQ0FBQyxJQUFMLENBQVUsSUFBSSxDQUFDLEdBQUQsQ0FBZCxDQUFQO0FBQ0gsR0FOTSxDQUFQO0FBT0gsQ0FUTTtBQVdQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7O0FBQ08sTUFBTSxVQUFVLEdBQUcsR0FBRyxJQUFJLFFBQVEsQ0FBQyxHQUFELEVBQU0sSUFBTixDQUFsQztBQUVQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7QUFDTyxNQUFNLFFBQVEsR0FBRyxDQUFDLElBQUQsRUFBTyxJQUFQLEtBQWdCO0FBQ3BDLE1BQUksT0FBTyxHQUFHLElBQWQ7QUFFQSxTQUFPLFlBQVk7QUFDZixVQUFNLE9BQU8sR0FBRyxJQUFoQjtBQUNBLFVBQU0sSUFBSSxHQUFHLFNBQWI7O0FBRUEsVUFBTSxLQUFLLEdBQUcsTUFBTTtBQUNoQixNQUFBLElBQUksQ0FBQyxLQUFMLENBQVcsT0FBWCxFQUFvQixJQUFwQjtBQUNILEtBRkQ7O0FBSUEsSUFBQSxZQUFZLENBQUMsT0FBRCxDQUFaO0FBQ0EsSUFBQSxPQUFPLEdBQUcsVUFBVSxDQUFDLEtBQUQsRUFBUSxJQUFSLENBQXBCO0FBQ0gsR0FWRDtBQVdILENBZE0iLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbigpe2Z1bmN0aW9uIHIoZSxuLHQpe2Z1bmN0aW9uIG8oaSxmKXtpZighbltpXSl7aWYoIWVbaV0pe3ZhciBjPVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmU7aWYoIWYmJmMpcmV0dXJuIGMoaSwhMCk7aWYodSlyZXR1cm4gdShpLCEwKTt2YXIgYT1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK2krXCInXCIpO3Rocm93IGEuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixhfXZhciBwPW5baV09e2V4cG9ydHM6e319O2VbaV1bMF0uY2FsbChwLmV4cG9ydHMsZnVuY3Rpb24ocil7dmFyIG49ZVtpXVsxXVtyXTtyZXR1cm4gbyhufHxyKX0scCxwLmV4cG9ydHMscixlLG4sdCl9cmV0dXJuIG5baV0uZXhwb3J0c31mb3IodmFyIHU9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZSxpPTA7aTx0Lmxlbmd0aDtpKyspbyh0W2ldKTtyZXR1cm4gb31yZXR1cm4gcn0pKCkiLCJpbXBvcnQgeyBQb3N0U2VsZWN0b3IgfSBmcm9tICcuLi9jb21wb25lbnRzL1Bvc3RTZWxlY3Rvcic7XG5pbXBvcnQgeyBEZXNpZ25PcHRpb25zIH0gZnJvbSAnLi4vY29tcG9uZW50cy9EZXNpZ25PcHRpb25zJztcbmltcG9ydCB7IFJlcGVhdGVyIH0gZnJvbSAnLi4vY29tcG9uZW50cy9SZXBlYXRlcic7XG5pbXBvcnQgeyBJbWFnZVVwbG9hZCB9IGZyb20gJy4uL2NvbXBvbmVudHMvSW1hZ2VVcGxvYWQnO1xuXG5jb25zdCB7IF9fIH0gPSB3cC5pMThuO1xuY29uc3QgeyByZWdpc3RlckJsb2NrVHlwZSB9ID0gd3AuYmxvY2tzO1xuY29uc3QgeyBJbnNwZWN0b3JDb250cm9scyB9ID0gd3AuYmxvY2tFZGl0b3I7XG5jb25zdCB7IEZyYWdtZW50IH0gPSB3cC5lbGVtZW50O1xuY29uc3QgeyBEaXNhYmxlZCwgUGFuZWxCb2R5IH0gPSB3cC5jb21wb25lbnRzO1xuY29uc3QgeyBzZXJ2ZXJTaWRlUmVuZGVyOiBTZXJ2ZXJTaWRlUmVuZGVyIH0gPSB3cDtcblxucmVnaXN0ZXJCbG9ja1R5cGUoICd2b2RpL3R2LXNob3dzLXNsaWRlcicsIHtcbiAgICB0aXRsZTogX18oJ1RWIFNob3dzIFNsaWRlcicsICd2b2RpLWV4dGVuc2lvbnMnKSxcblxuICAgIGljb246ICd3ZWxjb21lLXZpZXctc2l0ZScsXG5cbiAgICBjYXRlZ29yeTogJ3ZvZGktYmxvY2tzJyxcblxuICAgIGVkaXQ6ICggKCBwcm9wcyApID0+IHtcbiAgICAgICAgY29uc3QgeyBhdHRyaWJ1dGVzLCBzZXRBdHRyaWJ1dGVzIH0gPSBwcm9wcztcbiAgICAgICAgY29uc3QgeyBzbGlkZXJzLCBkZXNpZ25fb3B0aW9ucyB9ID0gYXR0cmlidXRlcztcblxuICAgICAgICBjb25zdCBvbkNoYW5nZVNsaWRlcnMgPSBuZXdTbGlkZXJzID0+IHtcbiAgICAgICAgICAgIHNldEF0dHJpYnV0ZXMoIHsgc2xpZGVyczogSlNPTi5zdHJpbmdpZnkoWy4uLm5ld1NsaWRlcnNdKSB9ICk7XG4gICAgICAgIH07XG5cbiAgICAgICAgY29uc3Qgb25DaGFuZ2VTbGlkZXJzSWRzID0gKG5ld0lkcywgaW5kZXgpID0+IHtcbiAgICAgICAgICAgIHZhciBzbGlkZXJzX3VwZGF0ZWQgPSBKU09OLnBhcnNlKHNsaWRlcnMgKTtcbiAgICAgICAgICAgIHNsaWRlcnNfdXBkYXRlZFtpbmRleF0udHZfc2hvd19pZCA9IG5ld0lkcy5qb2luKCcsJyk7XG4gICAgICAgICAgICBzZXRBdHRyaWJ1dGVzKCB7IHNsaWRlcnM6IEpTT04uc3RyaW5naWZ5KFsuLi5zbGlkZXJzX3VwZGF0ZWRdKSB9ICk7XG4gICAgICAgIH07XG5cbiAgICAgICAgY29uc3Qgb25DaGFuZ2VTbGlkZXJzQmdJbWFnZSA9IChtZWRpYSwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgIHZhciBzbGlkZXJzX3VwZGF0ZWQgPSBKU09OLnBhcnNlKHNsaWRlcnMgKTtcbiAgICAgICAgICAgIHNsaWRlcnNfdXBkYXRlZFtpbmRleF0uYmdfaW1hZ2UgPSBtZWRpYS5pZDtcbiAgICAgICAgICAgIHNldEF0dHJpYnV0ZXMoIHsgc2xpZGVyczogSlNPTi5zdHJpbmdpZnkoWy4uLnNsaWRlcnNfdXBkYXRlZF0pIH0gKTtcbiAgICAgICAgfTtcblxuICAgICAgICBjb25zdCBvbkNoYW5nZURlc2lnbk9wdGlvbnMgPSBuZXdEZXNpZ25PcHRpb25zID0+IHtcbiAgICAgICAgICAgIHNldEF0dHJpYnV0ZXMoIHsgZGVzaWduX29wdGlvbnM6IHsgLi4uZGVzaWduX29wdGlvbnMsIC4uLm5ld0Rlc2lnbk9wdGlvbnMgfSB9ICk7XG4gICAgICAgIH07XG5cbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxGcmFnbWVudD5cbiAgICAgICAgICAgICAgICA8SW5zcGVjdG9yQ29udHJvbHM+XG4gICAgICAgICAgICAgICAgICAgIDxSZXBlYXRlclxuICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU9e19fKCdTbGlkZXJzJywgJ3ZvZGktZXh0ZW5zaW9ucycpfVxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWVzPXsgc2xpZGVycyA/IEpTT04ucGFyc2Uoc2xpZGVycykgOiBbXSB9XG4gICAgICAgICAgICAgICAgICAgICAgICBkZWZhdWx0VmFsdWVzPXsgeyB0dl9zaG93X2lkOiAnJywgYmdfaW1hZ2U6ICcnIH0gfVxuICAgICAgICAgICAgICAgICAgICAgICAgdXBkYXRlVmFsdWVzPXsgb25DaGFuZ2VTbGlkZXJzIH1cbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgPFBvc3RTZWxlY3RvclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvc3RUeXBlID0gJ3R2X3Nob3cnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0U2luZ2xlID0geyB0cnVlIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPSd0dl9zaG93X2lkJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVla2V5PSdzZWxlY3RlZFBvc3RJZHMnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0ZWRQb3N0SWRzPScnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJpZ2dlcl9tZXRob2RfbmFtZT0ndXBkYXRlU2VsZWN0ZWRQb3N0SWRzJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVwZGF0ZVNlbGVjdGVkUG9zdElkcz17IG9uQ2hhbmdlU2xpZGVyc0lkcyB9XG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPEltYWdlVXBsb2FkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWRkSW1hZ2VMYWJlbD17IF9fKCdQaWNrIGFuIEJhY2tncm91bmQgSW1hZ2UnLCAndm9kaS1leHRlbnNpb25zJykgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlcGxhY2VJbWFnZUxhYmVsPXsgX18oJ1JlcGxhY2UgQmFja2dyb3VuZCBJbWFnZScsICd2b2RpLWV4dGVuc2lvbnMnKSB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVtb3ZlSW1hZ2VMYWJlbD17IF9fKCdSZW1vdmUgQmFja2dyb3VuZCBJbWFnZScsICd2b2RpLWV4dGVuc2lvbnMnKSB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT0nYmdfaW1hZ2UnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWVrZXk9J3ZhbHVlJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPScnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJpZ2dlcl9tZXRob2RfbmFtZT0nb25TZWxlY3QnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25TZWxlY3Q9eyBvbkNoYW5nZVNsaWRlcnNCZ0ltYWdlIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvUmVwZWF0ZXI+XG4gICAgICAgICAgICAgICAgICAgIDxQYW5lbEJvZHlcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlPXtfXygnRGVzaWduIE9wdGlvbnMnLCAndm9kaS1leHRlbnNpb25zJyl9XG4gICAgICAgICAgICAgICAgICAgICAgICBpbml0aWFsT3Blbj17IGZhbHNlIH1cbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgPERlc2lnbk9wdGlvbnNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyaWJ1dGVzID0geyB7IC4uLmRlc2lnbl9vcHRpb25zIH0gfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVwZGF0ZURlc2lnbk9wdGlvbnMgPSB7IG9uQ2hhbmdlRGVzaWduT3B0aW9ucyB9XG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICA8L1BhbmVsQm9keT5cbiAgICAgICAgICAgICAgICA8L0luc3BlY3RvckNvbnRyb2xzPlxuICAgICAgICAgICAgICAgIDxEaXNhYmxlZD5cbiAgICAgICAgICAgICAgICAgICAgeyBzbGlkZXJzID8gKFxuICAgICAgICAgICAgICAgICAgICA8U2VydmVyU2lkZVJlbmRlclxuICAgICAgICAgICAgICAgICAgICAgICAgYmxvY2s9XCJ2b2RpL3R2LXNob3dzLXNsaWRlclwiXG4gICAgICAgICAgICAgICAgICAgICAgICBhdHRyaWJ1dGVzPXsgYXR0cmlidXRlcyB9XG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICkgOiBfXygnQWRkIHNsaWRlcnMnLCAndm9kaS1leHRlbnNpb25zJykgfVxuICAgICAgICAgICAgICAgIDwvRGlzYWJsZWQ+XG4gICAgICAgICAgICA8L0ZyYWdtZW50PlxuICAgICAgICApO1xuICAgIH0gKSxcblxuICAgIHNhdmUoKSB7XG4gICAgICAgIC8vIFJlbmRlcmluZyBpbiBQSFBcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfSxcbn0gKTsiLCJjb25zdCB7IF9fIH0gPSB3cC5pMThuO1xuY29uc3QgeyBDb21wb25lbnQgfSA9IHdwLmVsZW1lbnQ7XG5jb25zdCB7IFJhbmdlQ29udHJvbCB9ID0gd3AuY29tcG9uZW50cztcblxuLyoqXG4gKiBEZXNpZ25PcHRpb25zIENvbXBvbmVudFxuICovXG5leHBvcnQgY2xhc3MgRGVzaWduT3B0aW9ucyBleHRlbmRzIENvbXBvbmVudCB7XG4gICAgLyoqXG4gICAgICogQ29uc3RydWN0b3IgZm9yIERlc2lnbk9wdGlvbnMgQ29tcG9uZW50LlxuICAgICAqIFNldHMgdXAgc3RhdGUsIGFuZCBjcmVhdGVzIGJpbmRpbmdzIGZvciBmdW5jdGlvbnMuXG4gICAgICogQHBhcmFtIG9iamVjdCBwcm9wcyAtIGN1cnJlbnQgY29tcG9uZW50IHByb3BlcnRpZXMuXG4gICAgICovXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIoLi4uYXJndW1lbnRzKTtcbiAgICAgICAgdGhpcy5wcm9wcyA9IHByb3BzO1xuXG4gICAgICAgIHRoaXMub25DaGFuZ2VQYWRkaW5nVG9wID0gdGhpcy5vbkNoYW5nZVBhZGRpbmdUb3AuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5vbkNoYW5nZVBhZGRpbmdCb3R0b20gPSB0aGlzLm9uQ2hhbmdlUGFkZGluZ0JvdHRvbS5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLm9uQ2hhbmdlUGFkZGluZ0xlZnQgPSB0aGlzLm9uQ2hhbmdlUGFkZGluZ0xlZnQuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5vbkNoYW5nZVBhZGRpbmdSaWdodCA9IHRoaXMub25DaGFuZ2VQYWRkaW5nUmlnaHQuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5vbkNoYW5nZU1hcmdpblRvcCA9IHRoaXMub25DaGFuZ2VNYXJnaW5Ub3AuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5vbkNoYW5nZU1hcmdpbkJvdHRvbSA9IHRoaXMub25DaGFuZ2VNYXJnaW5Cb3R0b20uYmluZCh0aGlzKTtcbiAgICB9XG5cbiAgICBvbkNoYW5nZVBhZGRpbmdUb3AoIG5ld29uQ2hhbmdlUGFkZGluZ1RvcCApIHtcbiAgICAgICAgdGhpcy5wcm9wcy51cGRhdGVEZXNpZ25PcHRpb25zKHtcbiAgICAgICAgICAgIHBhZGRpbmdfdG9wOiBuZXdvbkNoYW5nZVBhZGRpbmdUb3BcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgb25DaGFuZ2VQYWRkaW5nQm90dG9tKCBuZXdvbkNoYW5nZVBhZGRpbmdCb3R0b20gKSB7XG4gICAgICAgIHRoaXMucHJvcHMudXBkYXRlRGVzaWduT3B0aW9ucyh7XG4gICAgICAgICAgICBwYWRkaW5nX2JvdHRvbTogbmV3b25DaGFuZ2VQYWRkaW5nQm90dG9tXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIG9uQ2hhbmdlUGFkZGluZ0xlZnQoIG5ld29uQ2hhbmdlUGFkZGluZ0xlZnQgKSB7XG4gICAgICAgIHRoaXMucHJvcHMudXBkYXRlRGVzaWduT3B0aW9ucyh7XG4gICAgICAgICAgICBwYWRkaW5nX2xlZnQ6IG5ld29uQ2hhbmdlUGFkZGluZ0xlZnRcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgb25DaGFuZ2VQYWRkaW5nUmlnaHQoIG5ld29uQ2hhbmdlUGFkZGluZ1JpZ2h0ICkge1xuICAgICAgICB0aGlzLnByb3BzLnVwZGF0ZURlc2lnbk9wdGlvbnMoe1xuICAgICAgICAgICAgcGFkZGluZ19yaWdodDogbmV3b25DaGFuZ2VQYWRkaW5nUmlnaHRcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgb25DaGFuZ2VNYXJnaW5Ub3AoIG5ld29uQ2hhbmdlTWFyZ2luVG9wICkge1xuICAgICAgICB0aGlzLnByb3BzLnVwZGF0ZURlc2lnbk9wdGlvbnMoe1xuICAgICAgICAgICAgbWFyZ2luX3RvcDogbmV3b25DaGFuZ2VNYXJnaW5Ub3BcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgb25DaGFuZ2VNYXJnaW5Cb3R0b20oIG5ld29uQ2hhbmdlTWFyZ2luQm90dG9tICkge1xuICAgICAgICB0aGlzLnByb3BzLnVwZGF0ZURlc2lnbk9wdGlvbnMoe1xuICAgICAgICAgICAgbWFyZ2luX2JvdHRvbTogbmV3b25DaGFuZ2VNYXJnaW5Cb3R0b21cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmVuZGVycyB0aGUgRGVzaWduT3B0aW9ucyBjb21wb25lbnQuXG4gICAgICovXG4gICAgcmVuZGVyKCkge1xuICAgICAgICBjb25zdCB7IGF0dHJpYnV0ZXMgfSA9IHRoaXMucHJvcHM7XG4gICAgICAgIGNvbnN0IHsgcGFkZGluZ190b3AsIHBhZGRpbmdfYm90dG9tLCBwYWRkaW5nX2xlZnQsIHBhZGRpbmdfcmlnaHQsIG1hcmdpbl90b3AsIG1hcmdpbl9ib3R0b20gfSA9IGF0dHJpYnV0ZXM7XG5cbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgPFJhbmdlQ29udHJvbFxuICAgICAgICAgICAgICAgICAgICBsYWJlbD17X18oJ1BhZGRpbmcgVG9wIChweCknLCAndm9kaS1leHRlbnNpb25zJyl9XG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXsgcGFkZGluZ190b3AgfVxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17IHRoaXMub25DaGFuZ2VQYWRkaW5nVG9wIH1cbiAgICAgICAgICAgICAgICAgICAgbWluPXsgMCB9XG4gICAgICAgICAgICAgICAgICAgIG1heD17IDEwMCB9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8UmFuZ2VDb250cm9sXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsPXtfXygnUGFkZGluZyBCb3R0b20gKHB4KScsICd2b2RpLWV4dGVuc2lvbnMnKX1cbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9eyBwYWRkaW5nX2JvdHRvbSB9XG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsgdGhpcy5vbkNoYW5nZVBhZGRpbmdCb3R0b20gfVxuICAgICAgICAgICAgICAgICAgICBtaW49eyAwIH1cbiAgICAgICAgICAgICAgICAgICAgbWF4PXsgMTAwIH1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDxSYW5nZUNvbnRyb2xcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw9e19fKCdQYWRkaW5nIExlZnQgKHB4KScsICd2b2RpLWV4dGVuc2lvbnMnKX1cbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9eyBwYWRkaW5nX2xlZnQgfVxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17IHRoaXMub25DaGFuZ2VQYWRkaW5nTGVmdCB9XG4gICAgICAgICAgICAgICAgICAgIG1pbj17IDAgfVxuICAgICAgICAgICAgICAgICAgICBtYXg9eyAxMDAgfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPFJhbmdlQ29udHJvbFxuICAgICAgICAgICAgICAgICAgICBsYWJlbD17X18oJ1BhZGRpbmcgUmlnaHQgKHB4KScsICd2b2RpLWV4dGVuc2lvbnMnKX1cbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9eyBwYWRkaW5nX3JpZ2h0IH1cbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyB0aGlzLm9uQ2hhbmdlUGFkZGluZ1JpZ2h0IH1cbiAgICAgICAgICAgICAgICAgICAgbWluPXsgMCB9XG4gICAgICAgICAgICAgICAgICAgIG1heD17IDEwMCB9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8UmFuZ2VDb250cm9sXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsPXtfXygnTWFyZ2luIFRvcCAocHgpJywgJ3ZvZGktZXh0ZW5zaW9ucycpfVxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17IG1hcmdpbl90b3AgfVxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17IHRoaXMub25DaGFuZ2VNYXJnaW5Ub3AgfVxuICAgICAgICAgICAgICAgICAgICBtaW49eyAtMTAwIH1cbiAgICAgICAgICAgICAgICAgICAgbWF4PXsgMTAwIH1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDxSYW5nZUNvbnRyb2xcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw9e19fKCdNYXJnaW4gQm90dG9tIChweCknLCAndm9kaS1leHRlbnNpb25zJyl9XG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXsgbWFyZ2luX2JvdHRvbSB9XG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsgdGhpcy5vbkNoYW5nZU1hcmdpbkJvdHRvbSB9XG4gICAgICAgICAgICAgICAgICAgIG1pbj17IC0xMDAgfVxuICAgICAgICAgICAgICAgICAgICBtYXg9eyAxMDAgfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICB9XG59IiwiY29uc3QgeyBfXyB9ID0gd3AuaTE4bjtcbmNvbnN0IHsgTWVkaWFVcGxvYWQgfSA9IHdwLmJsb2NrRWRpdG9yO1xuY29uc3QgeyBGcmFnbWVudCwgQ29tcG9uZW50IH0gPSB3cC5lbGVtZW50O1xuY29uc3QgeyBCdXR0b24gfSA9IHdwLmNvbXBvbmVudHM7XG5cbi8qKlxuICogSW1hZ2VVcGxvYWQgQ29tcG9uZW50XG4gKi9cbmV4cG9ydCBjbGFzcyBJbWFnZVVwbG9hZCBleHRlbmRzIENvbXBvbmVudCB7XG4gICAgLyoqXG4gICAgICogQ29uc3RydWN0b3IgZm9yIEltYWdlVXBsb2FkIENvbXBvbmVudC5cbiAgICAgKiBTZXRzIHVwIHN0YXRlLCBhbmQgY3JlYXRlcyBiaW5kaW5ncyBmb3IgZnVuY3Rpb25zLlxuICAgICAqIEBwYXJhbSBvYmplY3QgcHJvcHMgLSBjdXJyZW50IGNvbXBvbmVudCBwcm9wZXJ0aWVzLlxuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKC4uLmFyZ3VtZW50cyk7XG4gICAgICAgIHRoaXMucHJvcHMgPSBwcm9wcztcblxuICAgICAgICB0aGlzLm9uQ2hhbmdlSW1hZ2UgPSB0aGlzLm9uQ2hhbmdlSW1hZ2UuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5vblJlbW92ZUltYWdlID0gdGhpcy5vblJlbW92ZUltYWdlLmJpbmQodGhpcyk7XG4gICAgfVxuXG4gICAgb25DaGFuZ2VJbWFnZSggbWVkaWEgKSB7XG4gICAgICAgIHRoaXMucHJvcHMub25TZWxlY3QoIG1lZGlhICk7XG4gICAgfVxuXG4gICAgb25SZW1vdmVJbWFnZSgpIHtcbiAgICAgICAgdGhpcy5wcm9wcy5vblNlbGVjdCggMCApO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJlbmRlcnMgdGhlIEltYWdlVXBsb2FkIGNvbXBvbmVudC5cbiAgICAgKi9cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGNvbnN0IHsgYXR0cmlidXRlcywgYWRkSW1hZ2VMYWJlbCwgcmVwbGFjZUltYWdlTGFiZWwsIHJlbW92ZUltYWdlTGFiZWwsIHZhbHVlIH0gPSB0aGlzLnByb3BzO1xuXG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbXBvbmVudHMtYmFzZS1jb250cm9sIGNvbXBvbmVudHMtaW1hZ2UtdXBsb2FkXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb21wb25lbnRzLWJhc2UtY29udHJvbF9fZmllbGRcIj5cbiAgICAgICAgICAgICAgICAgICAgPE1lZGlhVXBsb2FkXG4gICAgICAgICAgICAgICAgICAgICAgICBvblNlbGVjdD17IHRoaXMub25DaGFuZ2VJbWFnZSB9XG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiaW1hZ2VcIlxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9eyB2YWx1ZSB9XG4gICAgICAgICAgICAgICAgICAgICAgICByZW5kZXI9eyAoIHsgb3BlbiB9ICkgPT4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYnV0dG9uLWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIGlzU2Vjb25kYXJ5IGlzTGFyZ2Ugb25DbGljaz17IG9wZW4gfSBzdHlsZT17e21hcmdpbkJvdHRvbTogJy41cmVtJ319PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyAoIHZhbHVlICkgPyByZXBsYWNlSW1hZ2VMYWJlbCA6IGFkZEltYWdlTGFiZWwgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICkgfVxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIHsgKCB2YWx1ZSApID8gKFxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbXBvbmVudHMtYmFzZS1jb250cm9sX19maWVsZFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJidXR0b24tY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBpc1NlY29uZGFyeSBpc0xhcmdlIG9uQ2xpY2s9eyB0aGlzLm9uUmVtb3ZlSW1hZ2UgfSBzdHlsZT17e21hcmdpbkJvdHRvbTogJy41cmVtJ319PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IHJlbW92ZUltYWdlTGFiZWwgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICkgOiAnJyB9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICB9XG59IiwiXG4vKipcbiAqIEl0ZW0gQ29tcG9uZW50LlxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBpdGVtVGl0bGUgLSBDdXJyZW50IGl0ZW0gdGl0bGUuXG4gKiBAcGFyYW0ge2Z1bmN0aW9ufSBjbGlja0hhbmRsZXIgLSB0aGlzIGlzIHRoZSBoYW5kbGluZyBmdW5jdGlvbiBmb3IgdGhlIGFkZC9yZW1vdmUgZnVuY3Rpb25cbiAqIEBwYXJhbSB7SW50ZWdlcn0gaXRlbUlkIC0gQ3VycmVudCBpdGVtIElEXG4gKiBAcGFyYW0gaWNvblxuICogQHJldHVybnMgeyp9IEl0ZW0gSFRNTC5cbiAqL1xuZXhwb3J0IGNvbnN0IEl0ZW0gPSAoeyB0aXRsZTogeyByZW5kZXJlZDogaXRlbVRpdGxlIH0gPSB7fSwgbmFtZSwgY2xpY2tIYW5kbGVyLCBpZDogaXRlbUlkLCBpY29uIH0pID0+IChcbiAgICA8YXJ0aWNsZSBjbGFzc05hbWU9XCJpdGVtXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaXRlbS1ib2R5XCI+XG4gICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwiaXRlbS10aXRsZVwiIHN0eWxlPXt7bWFyZ2luVG9wOiAnMCd9fT57aXRlbVRpdGxlfXtuYW1lfTwvaDM+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IGNsaWNrSGFuZGxlcihpdGVtSWQpfT57aWNvbn08L2J1dHRvbj5cbiAgICA8L2FydGljbGU+XG4pOyIsImltcG9ydCB7IEl0ZW0gfSBmcm9tICcuL0l0ZW0nO1xuXG5jb25zdCB7IF9fIH0gPSB3cC5pMThuO1xuXG4vKipcbiAqIEl0ZW1MaXN0IENvbXBvbmVudFxuICogQHBhcmFtIG9iamVjdCBwcm9wcyAtIENvbXBvbmVudCBwcm9wcy5cbiAqIEByZXR1cm5zIHsqfVxuICogQGNvbnN0cnVjdG9yXG4gKi9cbmV4cG9ydCBjb25zdCBJdGVtTGlzdCA9IHByb3BzID0+IHtcbiAgICBjb25zdCB7IGZpbHRlcmVkID0gZmFsc2UsIGxvYWRpbmcgPSBmYWxzZSwgaXRlbXMgPSBbXSwgYWN0aW9uID0gKCkgPT4ge30sIGljb24gPSBudWxsIH0gPSBwcm9wcztcblxuICAgIGlmIChsb2FkaW5nKSB7XG4gICAgICAgIHJldHVybiA8cCBjbGFzc05hbWU9XCJsb2FkaW5nLWl0ZW1zXCI+e19fKCdMb2FkaW5nIC4uLicsICd2b2RpLWV4dGVuc2lvbnMnKX08L3A+O1xuICAgIH1cblxuICAgIGlmIChmaWx0ZXJlZCAmJiBpdGVtcy5sZW5ndGggPCAxKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIml0ZW0tbGlzdFwiPlxuICAgICAgICAgICAgICAgIDxwPntfXygnWW91ciBxdWVyeSB5aWVsZGVkIG5vIHJlc3VsdHMsIHBsZWFzZSB0cnkgYWdhaW4uJywgJ3ZvZGktZXh0ZW5zaW9ucycpfTwvcD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgIH1cblxuICAgIGlmICggISBpdGVtcyB8fCBpdGVtcy5sZW5ndGggPCAxICkge1xuICAgICAgICByZXR1cm4gPHAgY2xhc3NOYW1lPVwibm8taXRlbXNcIj57X18oJ05vdCBmb3VuZC4nLCAndm9kaS1leHRlbnNpb25zJyl9PC9wPlxuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaXRlbS1saXN0XCI+XG4gICAgICAgICAgICB7aXRlbXMubWFwKChpdGVtKSA9PiA8SXRlbSBrZXk9e2l0ZW0uaWR9IHsuLi5pdGVtfSBjbGlja0hhbmRsZXI9e2FjdGlvbn0gaWNvbj17aWNvbn0gLz4pfVxuICAgICAgICA8L2Rpdj5cbiAgICApO1xufTsiLCJpbXBvcnQgeyBJdGVtTGlzdCB9IGZyb20gJy4vSXRlbUxpc3QnO1xuaW1wb3J0ICogYXMgYXBpIGZyb20gJy4uL3V0aWxzL2FwaSc7XG5pbXBvcnQgeyB1bmlxdWVCeUlkLCBkZWJvdW5jZSB9IGZyb20gJy4uL3V0aWxzL3VzZWZ1bC1mdW5jcyc7XG5cbmNvbnN0IHsgX18gfSA9IHdwLmkxOG47XG5jb25zdCB7IEljb24gfSA9IHdwLmNvbXBvbmVudHM7XG5jb25zdCB7IENvbXBvbmVudCB9ID0gd3AuZWxlbWVudDtcblxuLyoqXG4gKiBQb3N0U2VsZWN0b3IgQ29tcG9uZW50XG4gKi9cbmV4cG9ydCBjbGFzcyBQb3N0U2VsZWN0b3IgZXh0ZW5kcyBDb21wb25lbnQge1xuICAgIC8qKlxuICAgICAqIENvbnN0cnVjdG9yIGZvciBQb3N0U2VsZWN0b3IgQ29tcG9uZW50LlxuICAgICAqIFNldHMgdXAgc3RhdGUsIGFuZCBjcmVhdGVzIGJpbmRpbmdzIGZvciBmdW5jdGlvbnMuXG4gICAgICogQHBhcmFtIG9iamVjdCBwcm9wcyAtIGN1cnJlbnQgY29tcG9uZW50IHByb3BlcnRpZXMuXG4gICAgICovXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIoLi4uYXJndW1lbnRzKTtcbiAgICAgICAgdGhpcy5wcm9wcyA9IHByb3BzO1xuXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAgICAgICBwb3N0czogW10sXG4gICAgICAgICAgICBsb2FkaW5nOiBmYWxzZSxcbiAgICAgICAgICAgIHR5cGU6IHByb3BzLnBvc3RUeXBlIHx8ICdwb3N0JyxcbiAgICAgICAgICAgIHR5cGVzOiBbXSxcbiAgICAgICAgICAgIGZpbHRlcjogJycsXG4gICAgICAgICAgICBmaWx0ZXJMb2FkaW5nOiBmYWxzZSxcbiAgICAgICAgICAgIGZpbHRlclBvc3RzOiBbXSxcbiAgICAgICAgICAgIGluaXRpYWxMb2FkaW5nOiBmYWxzZSxcbiAgICAgICAgICAgIHNlbGVjdGVkUG9zdHM6IFtdLFxuICAgICAgICB9O1xuXG4gICAgICAgIHRoaXMuYWRkUG9zdCA9IHRoaXMuYWRkUG9zdC5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLnJlbW92ZVBvc3QgPSB0aGlzLnJlbW92ZVBvc3QuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5oYW5kbGVJbnB1dEZpbHRlckNoYW5nZSA9IHRoaXMuaGFuZGxlSW5wdXRGaWx0ZXJDaGFuZ2UuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5kb1Bvc3RGaWx0ZXIgPSBkZWJvdW5jZSh0aGlzLmRvUG9zdEZpbHRlci5iaW5kKHRoaXMpLCAzMDApO1xuICAgICAgICB0aGlzLmdldFNlbGVjdGVkUG9zdElkcyA9IHRoaXMuZ2V0U2VsZWN0ZWRQb3N0SWRzLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMuZ2V0U2VsZWN0ZWRQb3N0cyA9IHRoaXMuZ2V0U2VsZWN0ZWRQb3N0cy5iaW5kKHRoaXMpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFdoZW4gdGhlIGNvbXBvbmVudCBtb3VudHMgaXQgY2FsbHMgdGhpcyBmdW5jdGlvbi5cbiAgICAgKiBGZXRjaGVzIHBvc3RzIHR5cGVzLCBzZWxlY3RlZCBwb3N0cyB0aGVuIG1ha2VzIGZpcnN0IGNhbGwgZm9yIHBvc3RzXG4gICAgICovXG4gICAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgaW5pdGlhbExvYWRpbmc6IHRydWUsXG4gICAgICAgIH0pO1xuXG4gICAgICAgIGFwaS5nZXRQb3N0VHlwZXMoKVxuICAgICAgICAgICAgLnRoZW4oKCByZXNwb25zZSApID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICAgICAgdHlwZXM6IHJlc3BvbnNlXG4gICAgICAgICAgICAgICAgfSwgKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnJldHJpZXZlU2VsZWN0ZWRQb3N0cygpXG4gICAgICAgICAgICAgICAgICAgICAgICAudGhlbigoIHNlbGVjdGVkUG9zdHMgKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYoIHNlbGVjdGVkUG9zdHMgKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5pdGlhbExvYWRpbmc6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0ZWRQb3N0czogc2VsZWN0ZWRQb3N0cyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbml0aWFsTG9hZGluZzogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBHZXRQb3N0cyB3cmFwcGVyLCBidWlsZHMgdGhlIHJlcXVlc3QgYXJndW1lbnQgYmFzZWQgc3RhdGUgYW5kIHBhcmFtZXRlcnMgcGFzc2VkL1xuICAgICAqIEBwYXJhbSB7b2JqZWN0fSBhcmdzIC0gZGVzaXJlZCBhcmd1bWVudHMgKGNhbiBiZSBlbXB0eSkuXG4gICAgICogQHJldHVybnMge1Byb21pc2U8VD59XG4gICAgICovXG4gICAgZ2V0UG9zdHMoYXJncyA9IHt9KSB7XG4gICAgICAgIGNvbnN0IHBvc3RJZHMgPSB0aGlzLmdldFNlbGVjdGVkUG9zdElkcygpO1xuXG4gICAgICAgIGNvbnN0IGRlZmF1bHRBcmdzID0ge1xuICAgICAgICAgICAgcGVyX3BhZ2U6IDEwLFxuICAgICAgICAgICAgdHlwZTogdGhpcy5zdGF0ZS50eXBlLFxuICAgICAgICAgICAgc2VhcmNoOiB0aGlzLnN0YXRlLmZpbHRlcixcbiAgICAgICAgfTtcblxuICAgICAgICBjb25zdCByZXF1ZXN0QXJndW1lbnRzID0ge1xuICAgICAgICAgICAgLi4uZGVmYXVsdEFyZ3MsXG4gICAgICAgICAgICAuLi5hcmdzXG4gICAgICAgIH07XG5cbiAgICAgICAgcmVxdWVzdEFyZ3VtZW50cy5yZXN0QmFzZSA9IHRoaXMuc3RhdGUudHlwZXNbdGhpcy5zdGF0ZS50eXBlXS5yZXN0X2Jhc2U7XG5cbiAgICAgICAgcmV0dXJuIGFwaS5nZXRQb3N0cyhyZXF1ZXN0QXJndW1lbnRzKVxuICAgICAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChyZXF1ZXN0QXJndW1lbnRzLnNlYXJjaCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZpbHRlclBvc3RzOiByZXNwb25zZS5maWx0ZXIoKHsgaWQgfSkgPT4gcG9zdElkcy5pbmRleE9mKGlkKSA9PT0gLTEpLFxuICAgICAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVzcG9uc2U7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgICAgIHBvc3RzOiB1bmlxdWVCeUlkKFsuLi50aGlzLnN0YXRlLnBvc3RzLCAuLi5yZXNwb25zZV0pLFxuICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgLy8gcmV0dXJuIHJlc3BvbnNlIHRvIGNvbnRpbnVlIHRoZSBjaGFpblxuICAgICAgICAgICAgICAgIHJldHVybiByZXNwb25zZTtcbiAgICAgICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEdldHMgdGhlIHNlbGVjdGVkIHBvc3RzIGJ5IGlkIGZyb20gdGhlIGBwb3N0c2Agc3RhdGUgb2JqZWN0IGFuZCBzb3J0cyB0aGVtIGJ5IHRoZWlyIHBvc2l0aW9uIGluIHRoZSBzZWxlY3RlZCBhcnJheS5cbiAgICAgKiBAcmV0dXJucyBBcnJheSBvZiBvYmplY3RzLlxuICAgICAqL1xuICAgIGdldFNlbGVjdGVkUG9zdElkcygpIHtcbiAgICAgICAgY29uc3QgeyBzZWxlY3RlZFBvc3RJZHMgfSA9IHRoaXMucHJvcHM7XG5cbiAgICAgICAgaWYoIHNlbGVjdGVkUG9zdElkcyApIHtcbiAgICAgICAgICAgIGNvbnN0IHBvc3RJZHMgPSBBcnJheS5pc0FycmF5KCBzZWxlY3RlZFBvc3RJZHMgKSA/IHNlbGVjdGVkUG9zdElkcyA6IHNlbGVjdGVkUG9zdElkcy5zcGxpdCgnLCcpO1xuICAgICAgICAgICAgcmV0dXJuIHBvc3RJZHM7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gW107XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogR2V0cyB0aGUgc2VsZWN0ZWQgcG9zdHMgYnkgaWQgZnJvbSB0aGUgYHBvc3RzYCBzdGF0ZSBvYmplY3QgYW5kIHNvcnRzIHRoZW0gYnkgdGhlaXIgcG9zaXRpb24gaW4gdGhlIHNlbGVjdGVkIGFycmF5LlxuICAgICAqIEByZXR1cm5zIEFycmF5IG9mIG9iamVjdHMuXG4gICAgICovXG4gICAgZ2V0U2VsZWN0ZWRQb3N0cyggcG9zdElkcyApIHtcbiAgICAgICAgLy8gY29uc3QgZmlsdGVyUG9zdHNMaXN0ID0gdGhpcy5zdGF0ZS5maWx0ZXJpbmcgJiYgIXRoaXMuc3RhdGUuZmlsdGVyTG9hZGluZyA/IHRoaXMuc3RhdGUuZmlsdGVyUG9zdHMgOiBbXTtcbiAgICAgICAgY29uc3QgcG9zdExpc3QgPSB1bmlxdWVCeUlkKFtcbiAgICAgICAgICAgIC4uLnRoaXMuc3RhdGUuZmlsdGVyUG9zdHMsXG4gICAgICAgICAgICAuLi50aGlzLnN0YXRlLnBvc3RzXG4gICAgICAgIF0pO1xuICAgICAgICBjb25zdCBzZWxlY3RlZFBvc3RzID0gcG9zdExpc3RcbiAgICAgICAgICAgIC5maWx0ZXIoKHsgaWQgfSkgPT4gcG9zdElkcy5pbmRleE9mKGlkKSAhPT0gLTEpXG4gICAgICAgICAgICAuc29ydCgoYSwgYikgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IGFJbmRleCA9IHBvc3RJZHMuaW5kZXhPZihhLmlkKTtcbiAgICAgICAgICAgICAgICBjb25zdCBiSW5kZXggPSBwb3N0SWRzLmluZGV4T2YoYi5pZCk7XG5cbiAgICAgICAgICAgICAgICBpZiAoYUluZGV4ID4gYkluZGV4KSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAxO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlmIChhSW5kZXggPCBiSW5kZXgpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIC0xO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHJldHVybiAwO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICBzZWxlY3RlZFBvc3RzOiBzZWxlY3RlZFBvc3RzLFxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBNYWtlcyB0aGUgbmVjZXNzYXJ5IGFwaSBjYWxscyB0byBmZXRjaCB0aGUgc2VsZWN0ZWQgcG9zdHMgYW5kIHJldHVybnMgYSBwcm9taXNlLlxuICAgICAqIEByZXR1cm5zIHsqfVxuICAgICAqL1xuICAgIHJldHJpZXZlU2VsZWN0ZWRQb3N0cygpIHtcbiAgICAgICAgY29uc3QgeyBwb3N0VHlwZSwgc2VsZWN0ZWRQb3N0SWRzIH0gPSB0aGlzLnByb3BzO1xuICAgICAgICBjb25zdCB7IHR5cGVzIH0gPSB0aGlzLnN0YXRlO1xuXG4gICAgICAgIGNvbnN0IHBvc3RJZHMgPSB0aGlzLmdldFNlbGVjdGVkUG9zdElkcygpLmpvaW4oJywnKTtcblxuICAgICAgICBpZiAoICEgcG9zdElkcyApIHtcbiAgICAgICAgICAgIC8vIHJldHVybiBhIGZha2UgcHJvbWlzZSB0aGF0IGF1dG8gcmVzb2x2ZXMuXG4gICAgICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHJlc29sdmUoKSk7XG4gICAgICAgIH1cblxuICAgICAgICBsZXQgcG9zdF9hcmdzID0ge1xuICAgICAgICAgICAgaW5jbHVkZTogcG9zdElkcyxcbiAgICAgICAgICAgIHBlcl9wYWdlOiAxMDAsXG4gICAgICAgICAgICBwb3N0VHlwZVxuICAgICAgICB9O1xuXG4gICAgICAgIGlmKCB0aGlzLnByb3BzLnBvc3RTdGF0dXMgKSB7XG4gICAgICAgICAgICBwb3N0X2FyZ3Muc3RhdHVzID0gdGhpcy5wcm9wcy5wb3N0U3RhdHVzO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0UG9zdHMoe1xuICAgICAgICAgICAgLi4ucG9zdF9hcmdzXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEFkZHMgZGVzaXJlZCBwb3N0IGlkIHRvIHRoZSBzZWxlY3RlZFBvc3RJZHMgTGlzdFxuICAgICAqIEBwYXJhbSB7SW50ZWdlcn0gcG9zdF9pZFxuICAgICAqL1xuICAgIGFkZFBvc3QocG9zdF9pZCkge1xuICAgICAgICBpZiAodGhpcy5zdGF0ZS5maWx0ZXIpIHtcbiAgICAgICAgICAgIGNvbnN0IHBvc3QgPSB0aGlzLnN0YXRlLmZpbHRlclBvc3RzLmZpbHRlcihwID0+IHAuaWQgPT09IHBvc3RfaWQpO1xuICAgICAgICAgICAgY29uc3QgcG9zdHMgPSB1bmlxdWVCeUlkKFtcbiAgICAgICAgICAgICAgICAuLi50aGlzLnN0YXRlLnBvc3RzLFxuICAgICAgICAgICAgICAgIC4uLnBvc3RcbiAgICAgICAgICAgIF0pO1xuXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICBwb3N0c1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiggdGhpcy5wcm9wcy5zZWxlY3RTaW5nbGUgKSB7XG4gICAgICAgICAgICBjb25zdCBzZWxlY3RlZFBvc3RJZHMgPSBbIHBvc3RfaWQgXTtcbiAgICAgICAgICAgIHRoaXMucHJvcHMudXBkYXRlU2VsZWN0ZWRQb3N0SWRzKCBzZWxlY3RlZFBvc3RJZHMgKTtcbiAgICAgICAgICAgIHRoaXMuZ2V0U2VsZWN0ZWRQb3N0cyggc2VsZWN0ZWRQb3N0SWRzICk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjb25zdCBwb3N0SWRzID0gdGhpcy5nZXRTZWxlY3RlZFBvc3RJZHMoKTtcbiAgICAgICAgICAgIGNvbnN0IHNlbGVjdGVkUG9zdElkcyA9IFsgLi4ucG9zdElkcywgcG9zdF9pZCBdO1xuICAgICAgICAgICAgdGhpcy5wcm9wcy51cGRhdGVTZWxlY3RlZFBvc3RJZHMoIHNlbGVjdGVkUG9zdElkcyApO1xuICAgICAgICAgICAgdGhpcy5nZXRTZWxlY3RlZFBvc3RzKCBzZWxlY3RlZFBvc3RJZHMgKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJlbW92ZXMgZGVzaXJlZCBwb3N0IGlkIHRvIHRoZSBzZWxlY3RlZFBvc3RJZHMgTGlzdFxuICAgICAqIEBwYXJhbSB7SW50ZWdlcn0gcG9zdF9pZFxuICAgICAqL1xuICAgIHJlbW92ZVBvc3QocG9zdF9pZCkge1xuICAgICAgICBjb25zdCBwb3N0SWRzID0gdGhpcy5nZXRTZWxlY3RlZFBvc3RJZHMoKTtcbiAgICAgICAgY29uc3Qgc2VsZWN0ZWRQb3N0SWRzID0gWyAuLi5wb3N0SWRzIF0uZmlsdGVyKGlkID0+IGlkICE9PSBwb3N0X2lkKTtcbiAgICAgICAgdGhpcy5wcm9wcy51cGRhdGVTZWxlY3RlZFBvc3RJZHMoIHNlbGVjdGVkUG9zdElkcyApO1xuICAgICAgICB0aGlzLmdldFNlbGVjdGVkUG9zdHMoIHNlbGVjdGVkUG9zdElkcyApO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEhhbmRsZXMgdGhlIHNlYXJjaCBib3ggaW5wdXQgdmFsdWVcbiAgICAgKiBAcGFyYW0gc3RyaW5nIHR5cGUgLSBjb21lcyBmcm9tIHRoZSBldmVudCBvYmplY3QgdGFyZ2V0LlxuICAgICAqL1xuICAgIGhhbmRsZUlucHV0RmlsdGVyQ2hhbmdlKHsgdGFyZ2V0OiB7IHZhbHVlOmZpbHRlciA9ICcnIH0gPSB7fSB9ID0ge30pIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICBmaWx0ZXJcbiAgICAgICAgfSwgKCkgPT4ge1xuICAgICAgICAgICAgaWYgKCFmaWx0ZXIpIHtcbiAgICAgICAgICAgICAgICAvLyByZW1vdmUgZmlsdGVyZWQgcG9zdHNcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5zZXRTdGF0ZSh7IGZpbHRlcmVkUG9zdHM6IFtdLCBmaWx0ZXJpbmc6IGZhbHNlIH0pO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB0aGlzLmRvUG9zdEZpbHRlcigpO1xuICAgICAgICB9KVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEFjdHVhbCBhcGkgY2FsbCBmb3Igc2VhcmNoaW5nIGZvciBxdWVyeSwgdGhpcyBmdW5jdGlvbiBpcyBkZWJvdW5jZWQgaW4gY29uc3RydWN0b3IuXG4gICAgICovXG4gICAgZG9Qb3N0RmlsdGVyKCkge1xuICAgICAgICBjb25zdCB7IGZpbHRlciA9ICcnIH0gPSB0aGlzLnN0YXRlO1xuXG4gICAgICAgIGlmICghZmlsdGVyKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIGZpbHRlcmluZzogdHJ1ZSxcbiAgICAgICAgICAgIGZpbHRlckxvYWRpbmc6IHRydWVcbiAgICAgICAgfSk7XG5cbiAgICAgICAgbGV0IHBvc3RfYXJncyA9IHt9O1xuXG4gICAgICAgIGlmKCB0aGlzLnByb3BzLnBvc3RTdGF0dXMgKSB7XG4gICAgICAgICAgICBwb3N0X2FyZ3Muc3RhdHVzID0gdGhpcy5wcm9wcy5wb3N0U3RhdHVzO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5nZXRQb3N0cyh7XG4gICAgICAgICAgICAuLi5wb3N0X2FyZ3NcbiAgICAgICAgfSkudGhlbigoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICBmaWx0ZXJMb2FkaW5nOiBmYWxzZVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJlbmRlcnMgdGhlIFBvc3RTZWxlY3RvciBjb21wb25lbnQuXG4gICAgICovXG4gICAgcmVuZGVyKCkge1xuICAgICAgICBjb25zdCBwb3N0TGlzdCA9IHRoaXMuc3RhdGUuZmlsdGVyaW5nICYmICF0aGlzLnN0YXRlLmZpbHRlckxvYWRpbmcgPyB0aGlzLnN0YXRlLmZpbHRlclBvc3RzIDogW107XG5cbiAgICAgICAgY29uc3QgYWRkSWNvbiA9IDxJY29uIGljb249XCJwbHVzXCIgLz47XG4gICAgICAgIGNvbnN0IHJlbW92ZUljb24gPSA8SWNvbiBpY29uPVwibWludXNcIiAvPjtcblxuICAgICAgICBjb25zdCBzZWFyY2hpbnB1dHVuaXF1ZUlkID0gJ3NlYXJjaGlucHV0LScgKyBNYXRoLnJhbmRvbSgpLnRvU3RyaW5nKDM2KS5zdWJzdHIoMiwgMTYpO1xuXG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbXBvbmVudHMtYmFzZS1jb250cm9sIGNvbXBvbmVudHMtcG9zdC1zZWxlY3RvclwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29tcG9uZW50cy1iYXNlLWNvbnRyb2xfX2ZpZWxkLS1zZWxlY3RlZFwiPlxuICAgICAgICAgICAgICAgICAgICA8aDI+e19fKCdTZWFyY2ggUG9zdCcsICd2b2RpLWV4dGVuc2lvbnMnKX08L2gyPlxuICAgICAgICAgICAgICAgICAgICA8SXRlbUxpc3RcbiAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW1zPXsgWy4uLnRoaXMuc3RhdGUuc2VsZWN0ZWRQb3N0c10gfVxuICAgICAgICAgICAgICAgICAgICAgICAgbG9hZGluZz17dGhpcy5zdGF0ZS5pbml0aWFsTG9hZGluZ31cbiAgICAgICAgICAgICAgICAgICAgICAgIGFjdGlvbj17dGhpcy5yZW1vdmVQb3N0fVxuICAgICAgICAgICAgICAgICAgICAgICAgaWNvbj17cmVtb3ZlSWNvbn1cbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbXBvbmVudHMtYmFzZS1jb250cm9sX19maWVsZFwiPlxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj17c2VhcmNoaW5wdXR1bmlxdWVJZH0gY2xhc3NOYW1lPVwiY29tcG9uZW50cy1iYXNlLWNvbnRyb2xfX2xhYmVsXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8SWNvbiBpY29uPVwic2VhcmNoXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJjb21wb25lbnRzLXRleHQtY29udHJvbF9faW5wdXRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgaWQ9e3NlYXJjaGlucHV0dW5pcXVlSWR9XG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwic2VhcmNoXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPXtfXygnUGxlYXNlIGVudGVyIHlvdXIgc2VhcmNoIHF1ZXJ5Li4uJywgJ3ZvZGktZXh0ZW5zaW9ucycpfVxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUuZmlsdGVyfVxuICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlSW5wdXRGaWx0ZXJDaGFuZ2V9XG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgIDxJdGVtTGlzdFxuICAgICAgICAgICAgICAgICAgICAgICAgaXRlbXM9e3Bvc3RMaXN0fVxuICAgICAgICAgICAgICAgICAgICAgICAgbG9hZGluZz17dGhpcy5zdGF0ZS5pbml0aWFsTG9hZGluZ3x8dGhpcy5zdGF0ZS5sb2FkaW5nfHx0aGlzLnN0YXRlLmZpbHRlckxvYWRpbmd9XG4gICAgICAgICAgICAgICAgICAgICAgICBmaWx0ZXJlZD17dGhpcy5zdGF0ZS5maWx0ZXJpbmd9XG4gICAgICAgICAgICAgICAgICAgICAgICBhY3Rpb249e3RoaXMuYWRkUG9zdH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGljb249e2FkZEljb259XG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICB9XG59IiwiY29uc3QgeyBfXyB9ID0gd3AuaTE4bjtcbmNvbnN0IHsgQ29tcG9uZW50LCBDaGlsZHJlbiB9ID0gd3AuZWxlbWVudDtcbmNvbnN0IHsgUGFuZWwsIEJ1dHRvbiwgSWNvbiB9ID0gd3AuY29tcG9uZW50cztcblxuLyoqXG4gKiBSZXBlYXRlciBDb21wb25lbnRcbiAqL1xuZXhwb3J0IGNsYXNzIFJlcGVhdGVyIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICAvKipcbiAgICAgKiBDb25zdHJ1Y3RvciBmb3IgUmVwZWF0ZXIgQ29tcG9uZW50LlxuICAgICAqIFNldHMgdXAgc3RhdGUsIGFuZCBjcmVhdGVzIGJpbmRpbmdzIGZvciBmdW5jdGlvbnMuXG4gICAgICogQHBhcmFtIG9iamVjdCBwcm9wcyAtIGN1cnJlbnQgY29tcG9uZW50IHByb3BlcnRpZXMuXG4gICAgICovXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIoLi4uYXJndW1lbnRzKTtcbiAgICAgICAgdGhpcy5wcm9wcyA9IHByb3BzO1xuXG4gICAgICAgIHRoaXMucmVuZGVyQWRkQnV0dG9uID0gdGhpcy5yZW5kZXJBZGRCdXR0b24uYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5yZW5kZXJSZW1vdmVCdXR0b24gPSB0aGlzLnJlbmRlclJlbW92ZUJ1dHRvbi5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLmhhbmRsZUFkZCA9IHRoaXMuaGFuZGxlQWRkLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMuaGFuZGxlUmVtb3ZlID0gdGhpcy5oYW5kbGVSZW1vdmUuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5yZW5kZXJDaGlsZHJlbkVsZW1lbnRzID0gdGhpcy5yZW5kZXJDaGlsZHJlbkVsZW1lbnRzLmJpbmQodGhpcyk7XG4gICAgfVxuXG4gICAgcmVuZGVyQWRkQnV0dG9uKCkge1xuICAgICAgICByZXR1cm4oXG4gICAgICAgICAgICA8QnV0dG9uIGlzRGVmYXVsdCBjbGFzc05hbWU9XCJidXR0b24tZnVsbHdpZHRoXCIgb25DbGljaz17dGhpcy5oYW5kbGVBZGR9PlxuICAgICAgICAgICAgICAgIDxJY29uIGljb249XCJwbHVzXCIgLz5cbiAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICApO1xuICAgIH1cblxuICAgIHJlbmRlclJlbW92ZUJ1dHRvbigpIHtcbiAgICAgICAgcmV0dXJuKFxuICAgICAgICAgICAgPEJ1dHRvbiBpc0Rlc3RydWN0aXZlIGNsYXNzTmFtZT1cImJ1dHRvbi1yZW1vdmVcIiBvbkNsaWNrPXt0aGlzLmhhbmRsZVJlbW92ZX0+XG4gICAgICAgICAgICAgICAgPEljb24gaWNvbj1cImRpc21pc3NcIiAvPlxuICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgaGFuZGxlQWRkKCkge1xuICAgICAgICBjb25zdCB7IGRlZmF1bHRWYWx1ZXMsIHVwZGF0ZVZhbHVlcyB9ID0gdGhpcy5wcm9wcztcbiAgICAgICAgY29uc3QgeyB2YWx1ZXMgfSA9IHRoaXMucHJvcHM7XG4gICAgICAgIGNvbnN0IGN1cnJlbnRfdmFsdWVzID0gdmFsdWVzID8gWyAuLi52YWx1ZXMsIHsgLi4uZGVmYXVsdFZhbHVlcyB9IF0gOiBbIHsgLi4uZGVmYXVsdFZhbHVlcyB9IF07XG4gICAgICAgIHVwZGF0ZVZhbHVlcyggY3VycmVudF92YWx1ZXMgKTtcbiAgICB9XG5cbiAgICBoYW5kbGVSZW1vdmUoIGluZGV4ICkge1xuICAgICAgICBjb25zdCB7IHVwZGF0ZVZhbHVlcyB9ID0gdGhpcy5wcm9wcztcbiAgICAgICAgY29uc3QgeyB2YWx1ZXMgfSA9IHRoaXMucHJvcHM7XG4gICAgICAgIGNvbnN0IGN1cnJlbnRfdmFsdWVzID0gdmFsdWVzLmZpbHRlciggKCB2YWx1ZSwgaSApID0+IGkgIT0gaW5kZXggKTtcbiAgICAgICAgdXBkYXRlVmFsdWVzKCBjdXJyZW50X3ZhbHVlcyApO1xuICAgIH1cblxuICAgIHJlbmRlckNoaWxkcmVuRWxlbWVudHMoKSB7XG4gICAgICAgIGNvbnN0IHsgY2hpbGRyZW4gfSA9IHRoaXMucHJvcHM7XG4gICAgICAgIGNvbnN0IHsgdmFsdWVzIH0gPSB0aGlzLnByb3BzO1xuXG4gICAgICAgIGlmKCAhIHZhbHVlcyApIHtcbiAgICAgICAgICAgIHJldHVybiBbXTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHJlbW92ZV9idXR0b24gPSB0aGlzLnJlbmRlclJlbW92ZUJ1dHRvbigpO1xuXG4gICAgICAgIHJldHVybiB2YWx1ZXMubWFwKCAoIHZhbHVlLCBpbmRleCApID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHVwZGF0ZWRfY2hpbGRyZW4gPSBDaGlsZHJlbi5tYXAoY2hpbGRyZW4sICggY2hpbGQgKSA9PiB7XG4gICAgICAgICAgICAgICAgbGV0IGNoaWxkX3Byb3BzID0geyAuLi5jaGlsZC5wcm9wcyB9O1xuICAgICAgICAgICAgICAgIGlmKCB2YWx1ZXNbaW5kZXhdW2NoaWxkLnByb3BzLm5hbWVdICkge1xuICAgICAgICAgICAgICAgICAgICBjaGlsZF9wcm9wc1tjaGlsZC5wcm9wcy52YWx1ZWtleV0gPSB2YWx1ZXNbaW5kZXhdW2NoaWxkLnByb3BzLm5hbWVdO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjaGlsZF9wcm9wc1tjaGlsZC5wcm9wcy50cmlnZ2VyX21ldGhvZF9uYW1lXSA9ICh2YWx1ZSkgPT4gY2hpbGQucHJvcHNbY2hpbGQucHJvcHMudHJpZ2dlcl9tZXRob2RfbmFtZV0odmFsdWUsIGluZGV4KTtcbiAgICAgICAgICAgICAgICByZXR1cm4gUmVhY3QuY2xvbmVFbGVtZW50KCBjaGlsZCwgeyAuLi5jaGlsZF9wcm9wcyB9ICk7XG4gICAgICAgICAgICB9ICk7XG5cbiAgICAgICAgICAgIGNvbnN0IHVwZGF0ZWRfcmVtb3ZlX2J1dHRvbiA9IFJlYWN0LmNsb25lRWxlbWVudCggcmVtb3ZlX2J1dHRvbiwgeyBrZXk6ICdyZXBlYXRlci1yZW1vdmUtJytpbmRleCwgb25DbGljazogKCkgPT4gcmVtb3ZlX2J1dHRvbi5wcm9wc1snb25DbGljayddKGluZGV4KSB9ICk7XG5cbiAgICAgICAgICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KCBQYW5lbCwgeyBrZXk6ICdyZXBlYXRlci1jaGlsZC0nK2luZGV4IH0sIFt1cGRhdGVkX2NoaWxkcmVuLCB1cGRhdGVkX3JlbW92ZV9idXR0b25dKTtcbiAgICAgICAgfSApO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJlbmRlcnMgdGhlIFJlcGVhdGVyIGNvbXBvbmVudC5cbiAgICAgKi9cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbXBvbmVudHMtYmFzZS1jb250cm9sIHJlcGVhdGVyLWNvbXBvbmVudFwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29tcG9uZW50cy1iYXNlLWNvbnRyb2xfX2ZpZWxkXCI+XG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJjb21wb25lbnRzLWJhc2UtY29udHJvbF9fbGFiZWxcIj57dGhpcy5wcm9wcy50aXRsZX08L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICB7dGhpcy5yZW5kZXJDaGlsZHJlbkVsZW1lbnRzKCl9XG4gICAgICAgICAgICAgICAgICAgIHt0aGlzLnJlbmRlckFkZEJ1dHRvbigpfVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgfVxufSIsImNvbnN0IHsgYXBpRmV0Y2ggfSA9IHdwO1xuXG4vKipcbiAqIE1ha2VzIGEgZ2V0IHJlcXVlc3QgdG8gdGhlIFBvc3RUeXBlcyBlbmRwb2ludC5cbiAqXG4gKiBAcmV0dXJucyB7UHJvbWlzZTxhbnk+fVxuICovXG5leHBvcnQgY29uc3QgZ2V0UG9zdFR5cGVzID0gKCkgPT4ge1xuICAgIHJldHVybiBhcGlGZXRjaCggeyBwYXRoOiAnL3dwL3YyL3R5cGVzJyB9ICk7XG59O1xuXG4vKipcbiAqIE1ha2VzIGEgZ2V0IHJlcXVlc3QgdG8gdGhlIGRlc2lyZWQgcG9zdCB0eXBlIGFuZCBidWlsZHMgdGhlIHF1ZXJ5IHN0cmluZyBiYXNlZCBvbiBhbiBvYmplY3QuXG4gKlxuICogQHBhcmFtIHtzdHJpbmd8Ym9vbGVhbn0gcmVzdEJhc2UgLSByZXN0IGJhc2UgZm9yIHRoZSBxdWVyeS5cbiAqIEBwYXJhbSB7b2JqZWN0fSBhcmdzXG4gKiBAcmV0dXJucyB7UHJvbWlzZTxhbnk+fVxuICovXG5leHBvcnQgY29uc3QgZ2V0UG9zdHMgPSAoeyByZXN0QmFzZSA9IGZhbHNlLCAuLi5hcmdzIH0pID0+IHtcbiAgICBjb25zdCBxdWVyeVN0cmluZyA9IE9iamVjdC5rZXlzKGFyZ3MpLm1hcChhcmcgPT4gYCR7YXJnfT0ke2FyZ3NbYXJnXX1gKS5qb2luKCcmJyk7XG5cbiAgICBsZXQgcGF0aCA9IGAvd3AvdjIvJHtyZXN0QmFzZX0/JHtxdWVyeVN0cmluZ30mX2VtYmVkYDtcbiAgICByZXR1cm4gYXBpRmV0Y2goIHsgcGF0aDogcGF0aCB9ICk7XG59O1xuXG4vKipcbiAqIE1ha2VzIGEgZ2V0IHJlcXVlc3QgdG8gdGhlIFBvc3RUeXBlIFRheG9ub21pZXMgZW5kcG9pbnQuXG4gKlxuICogQHJldHVybnMge1Byb21pc2U8YW55Pn1cbiAqL1xuZXhwb3J0IGNvbnN0IGdldFRheG9ub21pZXMgPSAoeyAuLi5hcmdzIH0pID0+IHtcbiAgICBjb25zdCBxdWVyeVN0cmluZyA9IE9iamVjdC5rZXlzKGFyZ3MpLm1hcChhcmcgPT4gYCR7YXJnfT0ke2FyZ3NbYXJnXX1gKS5qb2luKCcmJyk7XG5cbiAgICBsZXQgcGF0aCA9IGAvd3AvdjIvdGF4b25vbWllcz8ke3F1ZXJ5U3RyaW5nfSZfZW1iZWRgO1xuICAgIHJldHVybiBhcGlGZXRjaCggeyBwYXRoOiBwYXRoIH0gKTtcbn07XG5cbi8qKlxuICogTWFrZXMgYSBnZXQgcmVxdWVzdCB0byB0aGUgZGVzaXJlZCBwb3N0IHR5cGUgYW5kIGJ1aWxkcyB0aGUgcXVlcnkgc3RyaW5nIGJhc2VkIG9uIGFuIG9iamVjdC5cbiAqXG4gKiBAcGFyYW0ge3N0cmluZ3xib29sZWFufSByZXN0QmFzZSAtIHJlc3QgYmFzZSBmb3IgdGhlIHF1ZXJ5LlxuICogQHBhcmFtIHtvYmplY3R9IGFyZ3NcbiAqIEByZXR1cm5zIHtQcm9taXNlPGFueT59XG4gKi9cbmV4cG9ydCBjb25zdCBnZXRUZXJtcyA9ICh7IHJlc3RCYXNlID0gZmFsc2UsIC4uLmFyZ3MgfSkgPT4ge1xuICAgIGNvbnN0IHF1ZXJ5U3RyaW5nID0gT2JqZWN0LmtleXMoYXJncykubWFwKGFyZyA9PiBgJHthcmd9PSR7YXJnc1thcmddfWApLmpvaW4oJyYnKTtcblxuICAgIGxldCBwYXRoID0gYC93cC92Mi8ke3Jlc3RCYXNlfT8ke3F1ZXJ5U3RyaW5nfSZfZW1iZWRgO1xuICAgIHJldHVybiBhcGlGZXRjaCggeyBwYXRoOiBwYXRoIH0gKTtcbn07IiwiLyoqXG4gKiBSZXR1cm5zIGEgdW5pcXVlIGFycmF5IG9mIG9iamVjdHMgYmFzZWQgb24gYSBkZXNpcmVkIGtleS5cbiAqIEBwYXJhbSB7YXJyYXl9IGFyciAtIGFycmF5IG9mIG9iamVjdHMuXG4gKiBAcGFyYW0ge3N0cmluZ3xpbnR9IGtleSAtIGtleSB0byBmaWx0ZXIgb2JqZWN0cyBieVxuICovXG5leHBvcnQgY29uc3QgdW5pcXVlQnkgPSAoYXJyLCBrZXkpID0+IHtcbiAgICBsZXQga2V5cyA9IFtdO1xuICAgIHJldHVybiBhcnIuZmlsdGVyKGl0ZW0gPT4ge1xuICAgICAgICBpZiAoa2V5cy5pbmRleE9mKGl0ZW1ba2V5XSkgIT09IC0xKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4ga2V5cy5wdXNoKGl0ZW1ba2V5XSk7XG4gICAgfSk7XG59O1xuXG4vKipcbiAqIFJldHVybnMgYSB1bmlxdWUgYXJyYXkgb2Ygb2JqZWN0cyBiYXNlZCBvbiB0aGUgaWQgcHJvcGVydHkuXG4gKiBAcGFyYW0ge2FycmF5fSBhcnIgLSBhcnJheSBvZiBvYmplY3RzIHRvIGZpbHRlci5cbiAqIEByZXR1cm5zIHsqfVxuICovXG5leHBvcnQgY29uc3QgdW5pcXVlQnlJZCA9IGFyciA9PiB1bmlxdWVCeShhcnIsICdpZCcpO1xuXG4vKipcbiAqIERlYm91bmNlIGEgZnVuY3Rpb24gYnkgbGltaXRpbmcgaG93IG9mdGVuIGl0IGNhbiBydW4uXG4gKiBAcGFyYW0ge2Z1bmN0aW9ufSBmdW5jIC0gY2FsbGJhY2sgZnVuY3Rpb25cbiAqIEBwYXJhbSB7SW50ZWdlcn0gd2FpdCAtIFRpbWUgaW4gbWlsbGlzZWNvbmRzIGhvdyBsb25nIGl0IHNob3VsZCB3YWl0LlxuICogQHJldHVybnMge0Z1bmN0aW9ufVxuICovXG5leHBvcnQgY29uc3QgZGVib3VuY2UgPSAoZnVuYywgd2FpdCkgPT4ge1xuICAgIGxldCB0aW1lb3V0ID0gbnVsbDtcblxuICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzO1xuICAgICAgICBjb25zdCBhcmdzID0gYXJndW1lbnRzO1xuXG4gICAgICAgIGNvbnN0IGxhdGVyID0gKCkgPT4ge1xuICAgICAgICAgICAgZnVuYy5hcHBseShjb250ZXh0LCBhcmdzKTtcbiAgICAgICAgfTtcblxuICAgICAgICBjbGVhclRpbWVvdXQodGltZW91dCk7XG4gICAgICAgIHRpbWVvdXQgPSBzZXRUaW1lb3V0KGxhdGVyLCB3YWl0KTtcbiAgICB9XG59OyJdfQ==
