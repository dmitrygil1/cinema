(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

var _PostSelector = require("../components/PostSelector");

var _DesignOptions = require("../components/DesignOptions");

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
  PanelBody,
  TextControl,
  SelectControl
} = wp.components;
const {
  serverSideRender: ServerSideRender
} = wp;
registerBlockType('vodi/section-featured-movie', {
  title: __('Featured Movie', 'vodi-extensions'),
  icon: 'editor-video',
  category: 'vodi-blocks',
  edit: props => {
    const {
      attributes,
      setAttributes
    } = props;
    const {
      feature_movie_action_icon,
      movie_id,
      image,
      bg_image,
      design_options
    } = attributes;

    const onChangeFeatureVideoActionIcon = newFeatureVideoActionIcon => {
      setAttributes({
        feature_movie_action_icon: newFeatureVideoActionIcon
      });
    };

    const onChangeIds = newIds => {
      setAttributes({
        movie_id: newIds.join(',')
      });
    };

    const onChangeImage = media => {
      setAttributes({
        image: media.id
      });
    };

    const onChangeBgImage = media => {
      setAttributes({
        bg_image: media.id
      });
    };

    const onChangeDesignOptions = newDesignOptions => {
      setAttributes({
        design_options: { ...design_options,
          ...newDesignOptions
        }
      });
    };

    return wp.element.createElement(Fragment, null, wp.element.createElement(InspectorControls, null, wp.element.createElement(_PostSelector.PostSelector, {
      postType: "movie",
      selectSingle: true,
      selectedPostIds: movie_id ? movie_id.split(',').map(Number) : [],
      updateSelectedPostIds: onChangeIds
    }), wp.element.createElement(TextControl, {
      label: __('Feature Movie Action Icon', 'vodi-extensions'),
      value: feature_movie_action_icon,
      onChange: onChangeFeatureVideoActionIcon
    }), wp.element.createElement(_ImageUpload.ImageUpload, {
      addImageLabel: __('Pick an Image', 'vodi-extensions'),
      replaceImageLabel: __('Replace Image', 'vodi-extensions'),
      removeImageLabel: __('Remove Image', 'vodi-extensions'),
      value: image,
      onSelect: onChangeImage
    }), wp.element.createElement(_ImageUpload.ImageUpload, {
      addImageLabel: __('Pick an Background Image', 'vodi-extensions'),
      replaceImageLabel: __('Replace Background Image', 'vodi-extensions'),
      removeImageLabel: __('Remove Background Image', 'vodi-extensions'),
      value: bg_image,
      onSelect: onChangeBgImage
    }), wp.element.createElement(PanelBody, {
      title: __('Design Options', 'vodi-extensions'),
      initialOpen: false
    }, wp.element.createElement(_DesignOptions.DesignOptions, {
      attributes: { ...design_options
      },
      updateDesignOptions: onChangeDesignOptions
    }))), wp.element.createElement(Disabled, null, movie_id ? wp.element.createElement(ServerSideRender, {
      block: "vodi/section-featured-movie",
      attributes: attributes
    }) : __('Choose a movie', 'vodi-extensions')));
  },

  save() {
    // Rendering in PHP
    return null;
  }

});

},{"../components/DesignOptions":2,"../components/ImageUpload":3,"../components/PostSelector":6}],2:[function(require,module,exports){
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

},{"../utils/api":7,"../utils/useful-funcs":8,"./ItemList":5}],7:[function(require,module,exports){
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

},{}],8:[function(require,module,exports){
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvcGx1Z2lucy92b2RpLWV4dGVuc2lvbnMvYXNzZXRzL2VzbmV4dC9ibG9ja3Mvc2VjdGlvbi1mZWF0dXJlZC1tb3ZpZS5qcyIsInNyYy9wbHVnaW5zL3ZvZGktZXh0ZW5zaW9ucy9hc3NldHMvZXNuZXh0L2NvbXBvbmVudHMvRGVzaWduT3B0aW9ucy5qcyIsInNyYy9wbHVnaW5zL3ZvZGktZXh0ZW5zaW9ucy9hc3NldHMvZXNuZXh0L2NvbXBvbmVudHMvSW1hZ2VVcGxvYWQuanMiLCJzcmMvcGx1Z2lucy92b2RpLWV4dGVuc2lvbnMvYXNzZXRzL2VzbmV4dC9jb21wb25lbnRzL0l0ZW0uanMiLCJzcmMvcGx1Z2lucy92b2RpLWV4dGVuc2lvbnMvYXNzZXRzL2VzbmV4dC9jb21wb25lbnRzL0l0ZW1MaXN0LmpzIiwic3JjL3BsdWdpbnMvdm9kaS1leHRlbnNpb25zL2Fzc2V0cy9lc25leHQvY29tcG9uZW50cy9Qb3N0U2VsZWN0b3IuanMiLCJzcmMvcGx1Z2lucy92b2RpLWV4dGVuc2lvbnMvYXNzZXRzL2VzbmV4dC91dGlscy9hcGkuanMiLCJzcmMvcGx1Z2lucy92b2RpLWV4dGVuc2lvbnMvYXNzZXRzL2VzbmV4dC91dGlscy91c2VmdWwtZnVuY3MuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7OztBQ0FBOztBQUNBOztBQUNBOztBQUVBLE1BQU07QUFBRSxFQUFBO0FBQUYsSUFBUyxFQUFFLENBQUMsSUFBbEI7QUFDQSxNQUFNO0FBQUUsRUFBQTtBQUFGLElBQXdCLEVBQUUsQ0FBQyxNQUFqQztBQUNBLE1BQU07QUFBRSxFQUFBO0FBQUYsSUFBd0IsRUFBRSxDQUFDLFdBQWpDO0FBQ0EsTUFBTTtBQUFFLEVBQUE7QUFBRixJQUFlLEVBQUUsQ0FBQyxPQUF4QjtBQUNBLE1BQU07QUFBRSxFQUFBLFFBQUY7QUFBWSxFQUFBLFNBQVo7QUFBdUIsRUFBQSxXQUF2QjtB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OztBQUNPLE1BQU0sUUFBUSxHQUFHLENBQUMsSUFBRCxFQUFPLElBQVAsS0FBZ0I7QUFDcEMsTUFBSSxPQUFPLEdBQUcsSUFBZDtBQUVBLFNBQU8sWUFBWTtBQUNmLFVBQU0sT0FBTyxHQUFHLElBQWhCO0FBQ0EsVUFBTSxJQUFJLEdBQUcsU0FBYjs7QUFFQSxVQUFNLEtBQUssR0FBRyxNQUFNO0FBQ2hCLE1BQUEsSUFBSSxDQUFDLEtBQUwsQ0FBVyxPQUFYLEVBQW9CLElBQXBCO0FBQ0gsS0FGRDs7QUFJQSxJQUFBLFlBQVksQ0FBQyxPQUFELENBQVo7QUFDQSxJQUFBLE9BQU8sR0FBRyxVQUFVLENBQUMsS0FBRCxFQUFRLElBQVIsQ0FBcEI7QUFDSCxHQVZEO0FBV0gsQ0FkTSIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uKCl7ZnVuY3Rpb24gcihlLG4sdCl7ZnVuY3Rpb24gbyhpLGYpe2lmKCFuW2ldKXtpZighZVtpXSl7dmFyIGM9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZTtpZighZiYmYylyZXR1cm4gYyhpLCEwKTtpZih1KXJldHVybiB1KGksITApO3ZhciBhPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIraStcIidcIik7dGhyb3cgYS5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGF9dmFyIHA9bltpXT17ZXhwb3J0czp7fX07ZVtpXVswXS5jYWxsKHAuZXhwb3J0cyxmdW5jdGlvbihyKXt2YXIgbj1lW2ldWzFdW3JdO3JldHVybiBvKG58fHIpfSxwLHAuZXhwb3J0cyxyLGUsbix0KX1yZXR1cm4gbltpXS5leHBvcnRzfWZvcih2YXIgdT1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlLGk9MDtpPHQubGVuZ3RoO2krKylvKHRbaV0pO3JldHVybiBvfXJldHVybiByfSkoKSIsImltcG9ydCB7IFBvc3RTZWxlY3RvciB9IGZyb20gJy4uL2NvbXBvbmVudHMvUG9zdFNlbGVjdG9yJztcbmltcG9ydCB7IERlc2lnbk9wdGlvbnMgfSBmcm9tICcuLi9jb21wb25lbnRzL0Rlc2lnbk9wdGlvbnMnO1xuaW1wb3J0IHsgSW1hZ2VVcGxvYWQgfSBmcm9tICcuLi9jb21wb25lbnRzL0ltYWdlVXBsb2FkJztcblxuY29uc3QgeyBfXyB9ID0gd3AuaTE4bjtcbmNvbnN0IHsgcmVnaXN0ZXJCbG9ja1R5cGUgfSA9IHdwLmJsb2NrcztcbmNvbnN0IHsgSW5zcGVjdG9yQ29udHJvbHMgfSA9IHdwLmJsb2NrRWRpdG9yO1xuY29uc3QgeyBGcmFnbWVudCB9ID0gd3AuZWxlbWVudDtcbmNvbnN0IHsgRGlzYWJsZWQsIFBhbmVsQm9keSwgVGV4dENvbnRyb2wsIFNlbGVjdENvbnRyb2wgfSA9IHdwLmNvbXBvbmVudHM7XG5jb25zdCB7IHNlcnZlclNpZGVSZW5kZXI6IFNlcnZlclNpZGVSZW5kZXIgfSA9IHdwO1xuXG5yZWdpc3RlckJsb2NrVHlwZSggJ3ZvZGkvc2VjdGlvbi1mZWF0dXJlZC1tb3ZpZScsIHtcbiAgICB0aXRsZTogX18oJ0ZlYXR1cmVkIE1vdmllJywgJ3ZvZGktZXh0ZW5zaW9ucycpLFxuXG4gICAgaWNvbjogJ2VkaXRvci12aWRlbycsXG5cbiAgICBjYXRlZ29yeTogJ3ZvZGktYmxvY2tzJyxcblxuICAgIGVkaXQ6ICggKCBwcm9wcyApID0+IHtcbiAgICAgICAgY29uc3QgeyBhdHRyaWJ1dGVzLCBzZXRBdHRyaWJ1dGVzIH0gPSBwcm9wcztcbiAgICAgICAgY29uc3QgeyBmZWF0dXJlX21vdmllX2FjdGlvbl9pY29uLCBtb3ZpZV9pZCwgaW1hZ2UsIGJnX2ltYWdlLCBkZXNpZ25fb3B0aW9ucyB9ID0gYXR0cmlidXRlcztcblxuICAgICAgICBjb25zdCBvbkNoYW5nZUZlYXR1cmVWaWRlb0FjdGlvbkljb24gPSBuZXdGZWF0dXJlVmlkZW9BY3Rpb25JY29uID0+IHtcbiAgICAgICAgICAgIHNldEF0dHJpYnV0ZXMoIHsgZmVhdHVyZV9tb3ZpZV9hY3Rpb25faWNvbjogbmV3RmVhdHVyZVZpZGVvQWN0aW9uSWNvbiB9ICk7XG4gICAgICAgIH07XG5cbiAgICAgICAgY29uc3Qgb25DaGFuZ2VJZHMgPSBuZXdJZHM9PiB7XG4gICAgICAgICAgICBzZXRBdHRyaWJ1dGVzKCB7IG1vdmllX2lkOiBuZXdJZHMuam9pbignLCcpIH0gKTtcbiAgICAgICAgfTtcblxuICAgICAgICBjb25zdCBvbkNoYW5nZUltYWdlID0gbWVkaWEgPT4ge1xuICAgICAgICAgICAgc2V0QXR0cmlidXRlcyggeyBpbWFnZTogbWVkaWEuaWQgfSApO1xuICAgICAgICB9O1xuXG4gICAgICAgIGNvbnN0IG9uQ2hhbmdlQmdJbWFnZSA9IG1lZGlhID0+IHtcbiAgICAgICAgICAgIHNldEF0dHJpYnV0ZXMoIHsgYmdfaW1hZ2U6IG1lZGlhLmlkIH0gKTtcbiAgICAgICAgfTtcblxuICAgICAgICBjb25zdCBvbkNoYW5nZURlc2lnbk9wdGlvbnMgPSBuZXdEZXNpZ25PcHRpb25zID0+IHtcbiAgICAgICAgICAgIHNldEF0dHJpYnV0ZXMoIHsgZGVzaWduX29wdGlvbnM6IHsgLi4uZGVzaWduX29wdGlvbnMsIC4uLm5ld0Rlc2lnbk9wdGlvbnMgfSB9ICk7XG4gICAgICAgIH07XG5cbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxGcmFnbWVudD5cbiAgICAgICAgICAgICAgICA8SW5zcGVjdG9yQ29udHJvbHM+XG4gICAgICAgICAgICAgICAgICAgIDxQb3N0U2VsZWN0b3JcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvc3RUeXBlID0gJ21vdmllJ1xuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0U2luZ2xlID0geyB0cnVlIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdGVkUG9zdElkcz17IG1vdmllX2lkID8gbW92aWVfaWQuc3BsaXQoJywnKS5tYXAoTnVtYmVyKSA6IFtdIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHVwZGF0ZVNlbGVjdGVkUG9zdElkcz17IG9uQ2hhbmdlSWRzIH1cbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgPFRleHRDb250cm9sXG4gICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD17X18oJ0ZlYXR1cmUgTW92aWUgQWN0aW9uIEljb24nLCAndm9kaS1leHRlbnNpb25zJyl9XG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17IGZlYXR1cmVfbW92aWVfYWN0aW9uX2ljb24gfVxuICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyBvbkNoYW5nZUZlYXR1cmVWaWRlb0FjdGlvbkljb24gfVxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICA8SW1hZ2VVcGxvYWRcbiAgICAgICAgICAgICAgICAgICAgICAgIGFkZEltYWdlTGFiZWw9eyBfXygnUGljayBhbiBJbWFnZScsICd2b2RpLWV4dGVuc2lvbnMnKSB9XG4gICAgICAgICAgICAgICAgICAgICAgICByZXBsYWNlSW1hZ2VMYWJlbD17IF9fKCdSZXBsYWNlIEltYWdlJywgJ3ZvZGktZXh0ZW5zaW9ucycpIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHJlbW92ZUltYWdlTGFiZWw9eyBfXygnUmVtb3ZlIEltYWdlJywgJ3ZvZGktZXh0ZW5zaW9ucycpIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXsgaW1hZ2UgfVxuICAgICAgICAgICAgICAgICAgICAgICAgb25TZWxlY3Q9eyBvbkNoYW5nZUltYWdlIH1cbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgPEltYWdlVXBsb2FkXG4gICAgICAgICAgICAgICAgICAgICAgICBhZGRJbWFnZUxhYmVsPXsgX18oJ1BpY2sgYW4gQmFja2dyb3VuZCBJbWFnZScsICd2b2RpLWV4dGVuc2lvbnMnKSB9XG4gICAgICAgICAgICAgICAgICAgICAgICByZXBsYWNlSW1hZ2VMYWJlbD17IF9fKCdSZXBsYWNlIEJhY2tncm91bmQgSW1hZ2UnLCAndm9kaS1leHRlbnNpb25zJykgfVxuICAgICAgICAgICAgICAgICAgICAgICAgcmVtb3ZlSW1hZ2VMYWJlbD17IF9fKCdSZW1vdmUgQmFja2dyb3VuZCBJbWFnZScsICd2b2RpLWV4dGVuc2lvbnMnKSB9XG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17IGJnX2ltYWdlIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIG9uU2VsZWN0PXsgb25DaGFuZ2VCZ0ltYWdlIH1cbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgPFBhbmVsQm9keVxuICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU9e19fKCdEZXNpZ24gT3B0aW9ucycsICd2b2RpLWV4dGVuc2lvbnMnKX1cbiAgICAgICAgICAgICAgICAgICAgICAgIGluaXRpYWxPcGVuPXsgZmFsc2UgfVxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICA8RGVzaWduT3B0aW9uc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJpYnV0ZXMgPSB7IHsgLi4uZGVzaWduX29wdGlvbnMgfSB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdXBkYXRlRGVzaWduT3B0aW9ucyA9IHsgb25DaGFuZ2VEZXNpZ25PcHRpb25zIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvUGFuZWxCb2R5PlxuICAgICAgICAgICAgICAgIDwvSW5zcGVjdG9yQ29udHJvbHM+XG4gICAgICAgICAgICAgICAgPERpc2FibGVkPlxuICAgICAgICAgICAgICAgICAgICB7IG1vdmllX2lkID8gKFxuICAgICAgICAgICAgICAgICAgICA8U2VydmVyU2lkZVJlbmRlclxuICAgICAgICAgICAgICAgICAgICAgICAgYmxvY2s9XCJ2b2RpL3NlY3Rpb24tZmVhdHVyZWQtbW92aWVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgYXR0cmlidXRlcz17IGF0dHJpYnV0ZXMgfVxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICApIDogX18oJ0Nob29zZSBhIG1vdmllJywgJ3ZvZGktZXh0ZW5zaW9ucycpIH1cbiAgICAgICAgICAgICAgICA8L0Rpc2FibGVkPlxuICAgICAgICAgICAgPC9GcmFnbWVudD5cbiAgICAgICAgKTtcbiAgICB9ICksXG5cbiAgICBzYXZlKCkge1xuICAgICAgICAvLyBSZW5kZXJpbmcgaW4gUEhQXG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH0sXG59ICk7IiwiY29uc3QgeyBfXyB9ID0gd3AuaTE4bjtcbmNvbnN0IHsgQ29tcG9uZW50IH0gPSB3cC5lbGVtZW50O1xuY29uc3QgeyBSYW5nZUNvbnRyb2wgfSA9IHdwLmNvbXBvbmVudHM7XG5cbi8qKlxuICogRGVzaWduT3B0aW9ucyBDb21wb25lbnRcbiAqL1xuZXhwb3J0IGNsYXNzIERlc2lnbk9wdGlvbnMgZXh0ZW5kcyBDb21wb25lbnQge1xuICAgIC8qKlxuICAgICAqIENvbnN0cnVjdG9yIGZvciBEZXNpZ25PcHRpb25zIENvbXBvbmVudC5cbiAgICAgKiBTZXRzIHVwIHN0YXRlLCBhbmQgY3JlYXRlcyBiaW5kaW5ncyBmb3IgZnVuY3Rpb25zLlxuICAgICAqIEBwYXJhbSBvYmplY3QgcHJvcHMgLSBjdXJyZW50IGNvbXBvbmVudCBwcm9wZXJ0aWVzLlxuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKC4uLmFyZ3VtZW50cyk7XG4gICAgICAgIHRoaXMucHJvcHMgPSBwcm9wcztcblxuICAgICAgICB0aGlzLm9uQ2hhbmdlUGFkZGluZ1RvcCA9IHRoaXMub25DaGFuZ2VQYWRkaW5nVG9wLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMub25DaGFuZ2VQYWRkaW5nQm90dG9tID0gdGhpcy5vbkNoYW5nZVBhZGRpbmdCb3R0b20uYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5vbkNoYW5nZVBhZGRpbmdMZWZ0ID0gdGhpcy5vbkNoYW5nZVBhZGRpbmdMZWZ0LmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMub25DaGFuZ2VQYWRkaW5nUmlnaHQgPSB0aGlzLm9uQ2hhbmdlUGFkZGluZ1JpZ2h0LmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMub25DaGFuZ2VNYXJnaW5Ub3AgPSB0aGlzLm9uQ2hhbmdlTWFyZ2luVG9wLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMub25DaGFuZ2VNYXJnaW5Cb3R0b20gPSB0aGlzLm9uQ2hhbmdlTWFyZ2luQm90dG9tLmJpbmQodGhpcyk7XG4gICAgfVxuXG4gICAgb25DaGFuZ2VQYWRkaW5nVG9wKCBuZXdvbkNoYW5nZVBhZGRpbmdUb3AgKSB7XG4gICAgICAgIHRoaXMucHJvcHMudXBkYXRlRGVzaWduT3B0aW9ucyh7XG4gICAgICAgICAgICBwYWRkaW5nX3RvcDogbmV3b25DaGFuZ2VQYWRkaW5nVG9wXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIG9uQ2hhbmdlUGFkZGluZ0JvdHRvbSggbmV3b25DaGFuZ2VQYWRkaW5nQm90dG9tICkge1xuICAgICAgICB0aGlzLnByb3BzLnVwZGF0ZURlc2lnbk9wdGlvbnMoe1xuICAgICAgICAgICAgcGFkZGluZ19ib3R0b206IG5ld29uQ2hhbmdlUGFkZGluZ0JvdHRvbVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBvbkNoYW5nZVBhZGRpbmdMZWZ0KCBuZXdvbkNoYW5nZVBhZGRpbmdMZWZ0ICkge1xuICAgICAgICB0aGlzLnByb3BzLnVwZGF0ZURlc2lnbk9wdGlvbnMoe1xuICAgICAgICAgICAgcGFkZGluZ19sZWZ0OiBuZXdvbkNoYW5nZVBhZGRpbmdMZWZ0XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIG9uQ2hhbmdlUGFkZGluZ1JpZ2h0KCBuZXdvbkNoYW5nZVBhZGRpbmdSaWdodCApIHtcbiAgICAgICAgdGhpcy5wcm9wcy51cGRhdGVEZXNpZ25PcHRpb25zKHtcbiAgICAgICAgICAgIHBhZGRpbmdfcmlnaHQ6IG5ld29uQ2hhbmdlUGFkZGluZ1JpZ2h0XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIG9uQ2hhbmdlTWFyZ2luVG9wKCBuZXdvbkNoYW5nZU1hcmdpblRvcCApIHtcbiAgICAgICAgdGhpcy5wcm9wcy51cGRhdGVEZXNpZ25PcHRpb25zKHtcbiAgICAgICAgICAgIG1hcmdpbl90b3A6IG5ld29uQ2hhbmdlTWFyZ2luVG9wXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIG9uQ2hhbmdlTWFyZ2luQm90dG9tKCBuZXdvbkNoYW5nZU1hcmdpbkJvdHRvbSApIHtcbiAgICAgICAgdGhpcy5wcm9wcy51cGRhdGVEZXNpZ25PcHRpb25zKHtcbiAgICAgICAgICAgIG1hcmdpbl9ib3R0b206IG5ld29uQ2hhbmdlTWFyZ2luQm90dG9tXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJlbmRlcnMgdGhlIERlc2lnbk9wdGlvbnMgY29tcG9uZW50LlxuICAgICAqL1xuICAgIHJlbmRlcigpIHtcbiAgICAgICAgY29uc3QgeyBhdHRyaWJ1dGVzIH0gPSB0aGlzLnByb3BzO1xuICAgICAgICBjb25zdCB7IHBhZGRpbmdfdG9wLCBwYWRkaW5nX2JvdHRvbSwgcGFkZGluZ19sZWZ0LCBwYWRkaW5nX3JpZ2h0LCBtYXJnaW5fdG9wLCBtYXJnaW5fYm90dG9tIH0gPSBhdHRyaWJ1dGVzO1xuXG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxSYW5nZUNvbnRyb2xcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw9e19fKCdQYWRkaW5nIFRvcCAocHgpJywgJ3ZvZGktZXh0ZW5zaW9ucycpfVxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17IHBhZGRpbmdfdG9wIH1cbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyB0aGlzLm9uQ2hhbmdlUGFkZGluZ1RvcCB9XG4gICAgICAgICAgICAgICAgICAgIG1pbj17IDAgfVxuICAgICAgICAgICAgICAgICAgICBtYXg9eyAxMDAgfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPFJhbmdlQ29udHJvbFxuICAgICAgICAgICAgICAgICAgICBsYWJlbD17X18oJ1BhZGRpbmcgQm90dG9tIChweCknLCAndm9kaS1leHRlbnNpb25zJyl9XG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXsgcGFkZGluZ19ib3R0b20gfVxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17IHRoaXMub25DaGFuZ2VQYWRkaW5nQm90dG9tIH1cbiAgICAgICAgICAgICAgICAgICAgbWluPXsgMCB9XG4gICAgICAgICAgICAgICAgICAgIG1heD17IDEwMCB9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8UmFuZ2VDb250cm9sXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsPXtfXygnUGFkZGluZyBMZWZ0IChweCknLCAndm9kaS1leHRlbnNpb25zJyl9XG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXsgcGFkZGluZ19sZWZ0IH1cbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyB0aGlzLm9uQ2hhbmdlUGFkZGluZ0xlZnQgfVxuICAgICAgICAgICAgICAgICAgICBtaW49eyAwIH1cbiAgICAgICAgICAgICAgICAgICAgbWF4PXsgMTAwIH1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDxSYW5nZUNvbnRyb2xcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw9e19fKCdQYWRkaW5nIFJpZ2h0IChweCknLCAndm9kaS1leHRlbnNpb25zJyl9XG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXsgcGFkZGluZ19yaWdodCB9XG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsgdGhpcy5vbkNoYW5nZVBhZGRpbmdSaWdodCB9XG4gICAgICAgICAgICAgICAgICAgIG1pbj17IDAgfVxuICAgICAgICAgICAgICAgICAgICBtYXg9eyAxMDAgfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPFJhbmdlQ29udHJvbFxuICAgICAgICAgICAgICAgICAgICBsYWJlbD17X18oJ01hcmdpbiBUb3AgKHB4KScsICd2b2RpLWV4dGVuc2lvbnMnKX1cbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9eyBtYXJnaW5fdG9wIH1cbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyB0aGlzLm9uQ2hhbmdlTWFyZ2luVG9wIH1cbiAgICAgICAgICAgICAgICAgICAgbWluPXsgLTEwMCB9XG4gICAgICAgICAgICAgICAgICAgIG1heD17IDEwMCB9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8UmFuZ2VDb250cm9sXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsPXtfXygnTWFyZ2luIEJvdHRvbSAocHgpJywgJ3ZvZGktZXh0ZW5zaW9ucycpfVxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17IG1hcmdpbl9ib3R0b20gfVxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17IHRoaXMub25DaGFuZ2VNYXJnaW5Cb3R0b20gfVxuICAgICAgICAgICAgICAgICAgICBtaW49eyAtMTAwIH1cbiAgICAgICAgICAgICAgICAgICAgbWF4PXsgMTAwIH1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgfVxufSIsImNvbnN0IHsgX18gfSA9IHdwLmkxOG47XG5jb25zdCB7IE1lZGlhVXBsb2FkIH0gPSB3cC5ibG9ja0VkaXRvcjtcbmNvbnN0IHsgRnJhZ21lbnQsIENvbXBvbmVudCB9ID0gd3AuZWxlbWVudDtcbmNvbnN0IHsgQnV0dG9uIH0gPSB3cC5jb21wb25lbnRzO1xuXG4vKipcbiAqIEltYWdlVXBsb2FkIENvbXBvbmVudFxuICovXG5leHBvcnQgY2xhc3MgSW1hZ2VVcGxvYWQgZXh0ZW5kcyBDb21wb25lbnQge1xuICAgIC8qKlxuICAgICAqIENvbnN0cnVjdG9yIGZvciBJbWFnZVVwbG9hZCBDb21wb25lbnQuXG4gICAgICogU2V0cyB1cCBzdGF0ZSwgYW5kIGNyZWF0ZXMgYmluZGluZ3MgZm9yIGZ1bmN0aW9ucy5cbiAgICAgKiBAcGFyYW0gb2JqZWN0IHByb3BzIC0gY3VycmVudCBjb21wb25lbnQgcHJvcGVydGllcy5cbiAgICAgKi9cbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlciguLi5hcmd1bWVudHMpO1xuICAgICAgICB0aGlzLnByb3BzID0gcHJvcHM7XG5cbiAgICAgICAgdGhpcy5vbkNoYW5nZUltYWdlID0gdGhpcy5vbkNoYW5nZUltYWdlLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMub25SZW1vdmVJbWFnZSA9IHRoaXMub25SZW1vdmVJbWFnZS5iaW5kKHRoaXMpO1xuICAgIH1cblxuICAgIG9uQ2hhbmdlSW1hZ2UoIG1lZGlhICkge1xuICAgICAgICB0aGlzLnByb3BzLm9uU2VsZWN0KCBtZWRpYSApO1xuICAgIH1cblxuICAgIG9uUmVtb3ZlSW1hZ2UoKSB7XG4gICAgICAgIHRoaXMucHJvcHMub25TZWxlY3QoIDAgKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZW5kZXJzIHRoZSBJbWFnZVVwbG9hZCBjb21wb25lbnQuXG4gICAgICovXG4gICAgcmVuZGVyKCkge1xuICAgICAgICBjb25zdCB7IGF0dHJpYnV0ZXMsIGFkZEltYWdlTGFiZWwsIHJlcGxhY2VJbWFnZUxhYmVsLCByZW1vdmVJbWFnZUxhYmVsLCB2YWx1ZSB9ID0gdGhpcy5wcm9wcztcblxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb21wb25lbnRzLWJhc2UtY29udHJvbCBjb21wb25lbnRzLWltYWdlLXVwbG9hZFwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29tcG9uZW50cy1iYXNlLWNvbnRyb2xfX2ZpZWxkXCI+XG4gICAgICAgICAgICAgICAgICAgIDxNZWRpYVVwbG9hZFxuICAgICAgICAgICAgICAgICAgICAgICAgb25TZWxlY3Q9eyB0aGlzLm9uQ2hhbmdlSW1hZ2UgfVxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cImltYWdlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXsgdmFsdWUgfVxuICAgICAgICAgICAgICAgICAgICAgICAgcmVuZGVyPXsgKCB7IG9wZW4gfSApID0+IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJ1dHRvbi1jb250YWluZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBpc1NlY29uZGFyeSBpc0xhcmdlIG9uQ2xpY2s9eyBvcGVuIH0gc3R5bGU9e3ttYXJnaW5Cb3R0b206ICcuNXJlbSd9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgKCB2YWx1ZSApID8gcmVwbGFjZUltYWdlTGFiZWwgOiBhZGRJbWFnZUxhYmVsIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICApIH1cbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICB7ICggdmFsdWUgKSA/IChcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb21wb25lbnRzLWJhc2UtY29udHJvbF9fZmllbGRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYnV0dG9uLWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24gaXNTZWNvbmRhcnkgaXNMYXJnZSBvbkNsaWNrPXsgdGhpcy5vblJlbW92ZUltYWdlIH0gc3R5bGU9e3ttYXJnaW5Cb3R0b206ICcuNXJlbSd9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyByZW1vdmVJbWFnZUxhYmVsIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICApIDogJycgfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgfVxufSIsIlxuLyoqXG4gKiBJdGVtIENvbXBvbmVudC5cbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gaXRlbVRpdGxlIC0gQ3VycmVudCBpdGVtIHRpdGxlLlxuICogQHBhcmFtIHtmdW5jdGlvbn0gY2xpY2tIYW5kbGVyIC0gdGhpcyBpcyB0aGUgaGFuZGxpbmcgZnVuY3Rpb24gZm9yIHRoZSBhZGQvcmVtb3ZlIGZ1bmN0aW9uXG4gKiBAcGFyYW0ge0ludGVnZXJ9IGl0ZW1JZCAtIEN1cnJlbnQgaXRlbSBJRFxuICogQHBhcmFtIGljb25cbiAqIEByZXR1cm5zIHsqfSBJdGVtIEhUTUwuXG4gKi9cbmV4cG9ydCBjb25zdCBJdGVtID0gKHsgdGl0bGU6IHsgcmVuZGVyZWQ6IGl0ZW1UaXRsZSB9ID0ge30sIG5hbWUsIGNsaWNrSGFuZGxlciwgaWQ6IGl0ZW1JZCwgaWNvbiB9KSA9PiAoXG4gICAgPGFydGljbGUgY2xhc3NOYW1lPVwiaXRlbVwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIml0ZW0tYm9keVwiPlxuICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cIml0ZW0tdGl0bGVcIiBzdHlsZT17e21hcmdpblRvcDogJzAnfX0+e2l0ZW1UaXRsZX17bmFtZX08L2gzPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBjbGlja0hhbmRsZXIoaXRlbUlkKX0+e2ljb259PC9idXR0b24+XG4gICAgPC9hcnRpY2xlPlxuKTsiLCJpbXBvcnQgeyBJdGVtIH0gZnJvbSAnLi9JdGVtJztcblxuY29uc3QgeyBfXyB9ID0gd3AuaTE4bjtcblxuLyoqXG4gKiBJdGVtTGlzdCBDb21wb25lbnRcbiAqIEBwYXJhbSBvYmplY3QgcHJvcHMgLSBDb21wb25lbnQgcHJvcHMuXG4gKiBAcmV0dXJucyB7Kn1cbiAqIEBjb25zdHJ1Y3RvclxuICovXG5leHBvcnQgY29uc3QgSXRlbUxpc3QgPSBwcm9wcyA9PiB7XG4gICAgY29uc3QgeyBmaWx0ZXJlZCA9IGZhbHNlLCBsb2FkaW5nID0gZmFsc2UsIGl0ZW1zID0gW10sIGFjdGlvbiA9ICgpID0+IHt9LCBpY29uID0gbnVsbCB9ID0gcHJvcHM7XG5cbiAgICBpZiAobG9hZGluZykge1xuICAgICAgICByZXR1cm4gPHAgY2xhc3NOYW1lPVwibG9hZGluZy1pdGVtc1wiPntfXygnTG9hZGluZyAuLi4nLCAndm9kaS1leHRlbnNpb25zJyl9PC9wPjtcbiAgICB9XG5cbiAgICBpZiAoZmlsdGVyZWQgJiYgaXRlbXMubGVuZ3RoIDwgMSkge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpdGVtLWxpc3RcIj5cbiAgICAgICAgICAgICAgICA8cD57X18oJ1lvdXIgcXVlcnkgeWllbGRlZCBubyByZXN1bHRzLCBwbGVhc2UgdHJ5IGFnYWluLicsICd2b2RpLWV4dGVuc2lvbnMnKX08L3A+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICBpZiAoICEgaXRlbXMgfHwgaXRlbXMubGVuZ3RoIDwgMSApIHtcbiAgICAgICAgcmV0dXJuIDxwIGNsYXNzTmFtZT1cIm5vLWl0ZW1zXCI+e19fKCdOb3QgZm91bmQuJywgJ3ZvZGktZXh0ZW5zaW9ucycpfTwvcD5cbiAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIml0ZW0tbGlzdFwiPlxuICAgICAgICAgICAge2l0ZW1zLm1hcCgoaXRlbSkgPT4gPEl0ZW0ga2V5PXtpdGVtLmlkfSB7Li4uaXRlbX0gY2xpY2tIYW5kbGVyPXthY3Rpb259IGljb249e2ljb259IC8+KX1cbiAgICAgICAgPC9kaXY+XG4gICAgKTtcbn07IiwiaW1wb3J0IHsgSXRlbUxpc3QgfSBmcm9tICcuL0l0ZW1MaXN0JztcbmltcG9ydCAqIGFzIGFwaSBmcm9tICcuLi91dGlscy9hcGknO1xuaW1wb3J0IHsgdW5pcXVlQnlJZCwgZGVib3VuY2UgfSBmcm9tICcuLi91dGlscy91c2VmdWwtZnVuY3MnO1xuXG5jb25zdCB7IF9fIH0gPSB3cC5pMThuO1xuY29uc3QgeyBJY29uIH0gPSB3cC5jb21wb25lbnRzO1xuY29uc3QgeyBDb21wb25lbnQgfSA9IHdwLmVsZW1lbnQ7XG5cbi8qKlxuICogUG9zdFNlbGVjdG9yIENvbXBvbmVudFxuICovXG5leHBvcnQgY2xhc3MgUG9zdFNlbGVjdG9yIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICAvKipcbiAgICAgKiBDb25zdHJ1Y3RvciBmb3IgUG9zdFNlbGVjdG9yIENvbXBvbmVudC5cbiAgICAgKiBTZXRzIHVwIHN0YXRlLCBhbmQgY3JlYXRlcyBiaW5kaW5ncyBmb3IgZnVuY3Rpb25zLlxuICAgICAqIEBwYXJhbSBvYmplY3QgcHJvcHMgLSBjdXJyZW50IGNvbXBvbmVudCBwcm9wZXJ0aWVzLlxuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKC4uLmFyZ3VtZW50cyk7XG4gICAgICAgIHRoaXMucHJvcHMgPSBwcm9wcztcblxuICAgICAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgICAgICAgcG9zdHM6IFtdLFxuICAgICAgICAgICAgbG9hZGluZzogZmFsc2UsXG4gICAgICAgICAgICB0eXBlOiBwcm9wcy5wb3N0VHlwZSB8fCAncG9zdCcsXG4gICAgICAgICAgICB0eXBlczogW10sXG4gICAgICAgICAgICBmaWx0ZXI6ICcnLFxuICAgICAgICAgICAgZmlsdGVyTG9hZGluZzogZmFsc2UsXG4gICAgICAgICAgICBmaWx0ZXJQb3N0czogW10sXG4gICAgICAgICAgICBpbml0aWFsTG9hZGluZzogZmFsc2UsXG4gICAgICAgICAgICBzZWxlY3RlZFBvc3RzOiBbXSxcbiAgICAgICAgfTtcblxuICAgICAgICB0aGlzLmFkZFBvc3QgPSB0aGlzLmFkZFBvc3QuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5yZW1vdmVQb3N0ID0gdGhpcy5yZW1vdmVQb3N0LmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMuaGFuZGxlSW5wdXRGaWx0ZXJDaGFuZ2UgPSB0aGlzLmhhbmRsZUlucHV0RmlsdGVyQ2hhbmdlLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMuZG9Qb3N0RmlsdGVyID0gZGVib3VuY2UodGhpcy5kb1Bvc3RGaWx0ZXIuYmluZCh0aGlzKSwgMzAwKTtcbiAgICAgICAgdGhpcy5nZXRTZWxlY3RlZFBvc3RJZHMgPSB0aGlzLmdldFNlbGVjdGVkUG9zdElkcy5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLmdldFNlbGVjdGVkUG9zdHMgPSB0aGlzLmdldFNlbGVjdGVkUG9zdHMuYmluZCh0aGlzKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBXaGVuIHRoZSBjb21wb25lbnQgbW91bnRzIGl0IGNhbGxzIHRoaXMgZnVuY3Rpb24uXG4gICAgICogRmV0Y2hlcyBwb3N0cyB0eXBlcywgc2VsZWN0ZWQgcG9zdHMgdGhlbiBtYWtlcyBmaXJzdCBjYWxsIGZvciBwb3N0c1xuICAgICAqL1xuICAgIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIGluaXRpYWxMb2FkaW5nOiB0cnVlLFxuICAgICAgICB9KTtcblxuICAgICAgICBhcGkuZ2V0UG9zdFR5cGVzKClcbiAgICAgICAgICAgIC50aGVuKCggcmVzcG9uc2UgKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgICAgIHR5cGVzOiByZXNwb25zZVxuICAgICAgICAgICAgICAgIH0sICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5yZXRyaWV2ZVNlbGVjdGVkUG9zdHMoKVxuICAgICAgICAgICAgICAgICAgICAgICAgLnRoZW4oKCBzZWxlY3RlZFBvc3RzICkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmKCBzZWxlY3RlZFBvc3RzICkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGluaXRpYWxMb2FkaW5nOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdGVkUG9zdHM6IHNlbGVjdGVkUG9zdHMsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5pdGlhbExvYWRpbmc6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogR2V0UG9zdHMgd3JhcHBlciwgYnVpbGRzIHRoZSByZXF1ZXN0IGFyZ3VtZW50IGJhc2VkIHN0YXRlIGFuZCBwYXJhbWV0ZXJzIHBhc3NlZC9cbiAgICAgKiBAcGFyYW0ge29iamVjdH0gYXJncyAtIGRlc2lyZWQgYXJndW1lbnRzIChjYW4gYmUgZW1wdHkpLlxuICAgICAqIEByZXR1cm5zIHtQcm9taXNlPFQ+fVxuICAgICAqL1xuICAgIGdldFBvc3RzKGFyZ3MgPSB7fSkge1xuICAgICAgICBjb25zdCBwb3N0SWRzID0gdGhpcy5nZXRTZWxlY3RlZFBvc3RJZHMoKTtcblxuICAgICAgICBjb25zdCBkZWZhdWx0QXJncyA9IHtcbiAgICAgICAgICAgIHBlcl9wYWdlOiAxMCxcbiAgICAgICAgICAgIHR5cGU6IHRoaXMuc3RhdGUudHlwZSxcbiAgICAgICAgICAgIHNlYXJjaDogdGhpcy5zdGF0ZS5maWx0ZXIsXG4gICAgICAgIH07XG5cbiAgICAgICAgY29uc3QgcmVxdWVzdEFyZ3VtZW50cyA9IHtcbiAgICAgICAgICAgIC4uLmRlZmF1bHRBcmdzLFxuICAgICAgICAgICAgLi4uYXJnc1xuICAgICAgICB9O1xuXG4gICAgICAgIHJlcXVlc3RBcmd1bWVudHMucmVzdEJhc2UgPSB0aGlzLnN0YXRlLnR5cGVzW3RoaXMuc3RhdGUudHlwZV0ucmVzdF9iYXNlO1xuXG4gICAgICAgIHJldHVybiBhcGkuZ2V0UG9zdHMocmVxdWVzdEFyZ3VtZW50cylcbiAgICAgICAgICAgIC50aGVuKHJlc3BvbnNlID0+IHtcbiAgICAgICAgICAgICAgICBpZiAocmVxdWVzdEFyZ3VtZW50cy5zZWFyY2gpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgICAgICAgICBmaWx0ZXJQb3N0czogcmVzcG9uc2UuZmlsdGVyKCh7IGlkIH0pID0+IHBvc3RJZHMuaW5kZXhPZihpZCkgPT09IC0xKSxcbiAgICAgICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlc3BvbnNlO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICAgICAgICBwb3N0czogdW5pcXVlQnlJZChbLi4udGhpcy5zdGF0ZS5wb3N0cywgLi4ucmVzcG9uc2VdKSxcbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgIC8vIHJldHVybiByZXNwb25zZSB0byBjb250aW51ZSB0aGUgY2hhaW5cbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzcG9uc2U7XG4gICAgICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBHZXRzIHRoZSBzZWxlY3RlZCBwb3N0cyBieSBpZCBmcm9tIHRoZSBgcG9zdHNgIHN0YXRlIG9iamVjdCBhbmQgc29ydHMgdGhlbSBieSB0aGVpciBwb3NpdGlvbiBpbiB0aGUgc2VsZWN0ZWQgYXJyYXkuXG4gICAgICogQHJldHVybnMgQXJyYXkgb2Ygb2JqZWN0cy5cbiAgICAgKi9cbiAgICBnZXRTZWxlY3RlZFBvc3RJZHMoKSB7XG4gICAgICAgIGNvbnN0IHsgc2VsZWN0ZWRQb3N0SWRzIH0gPSB0aGlzLnByb3BzO1xuXG4gICAgICAgIGlmKCBzZWxlY3RlZFBvc3RJZHMgKSB7XG4gICAgICAgICAgICBjb25zdCBwb3N0SWRzID0gQXJyYXkuaXNBcnJheSggc2VsZWN0ZWRQb3N0SWRzICkgPyBzZWxlY3RlZFBvc3RJZHMgOiBzZWxlY3RlZFBvc3RJZHMuc3BsaXQoJywnKTtcbiAgICAgICAgICAgIHJldHVybiBwb3N0SWRzO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIFtdO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEdldHMgdGhlIHNlbGVjdGVkIHBvc3RzIGJ5IGlkIGZyb20gdGhlIGBwb3N0c2Agc3RhdGUgb2JqZWN0IGFuZCBzb3J0cyB0aGVtIGJ5IHRoZWlyIHBvc2l0aW9uIGluIHRoZSBzZWxlY3RlZCBhcnJheS5cbiAgICAgKiBAcmV0dXJucyBBcnJheSBvZiBvYmplY3RzLlxuICAgICAqL1xuICAgIGdldFNlbGVjdGVkUG9zdHMoIHBvc3RJZHMgKSB7XG4gICAgICAgIC8vIGNvbnN0IGZpbHRlclBvc3RzTGlzdCA9IHRoaXMuc3RhdGUuZmlsdGVyaW5nICYmICF0aGlzLnN0YXRlLmZpbHRlckxvYWRpbmcgPyB0aGlzLnN0YXRlLmZpbHRlclBvc3RzIDogW107XG4gICAgICAgIGNvbnN0IHBvc3RMaXN0ID0gdW5pcXVlQnlJZChbXG4gICAgICAgICAgICAuLi50aGlzLnN0YXRlLmZpbHRlclBvc3RzLFxuICAgICAgICAgICAgLi4udGhpcy5zdGF0ZS5wb3N0c1xuICAgICAgICBdKTtcbiAgICAgICAgY29uc3Qgc2VsZWN0ZWRQb3N0cyA9IHBvc3RMaXN0XG4gICAgICAgICAgICAuZmlsdGVyKCh7IGlkIH0pID0+IHBvc3RJZHMuaW5kZXhPZihpZCkgIT09IC0xKVxuICAgICAgICAgICAgLnNvcnQoKGEsIGIpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBhSW5kZXggPSBwb3N0SWRzLmluZGV4T2YoYS5pZCk7XG4gICAgICAgICAgICAgICAgY29uc3QgYkluZGV4ID0gcG9zdElkcy5pbmRleE9mKGIuaWQpO1xuXG4gICAgICAgICAgICAgICAgaWYgKGFJbmRleCA+IGJJbmRleCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gMTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpZiAoYUluZGV4IDwgYkluZGV4KSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAtMTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICByZXR1cm4gMDtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgc2VsZWN0ZWRQb3N0czogc2VsZWN0ZWRQb3N0cyxcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogTWFrZXMgdGhlIG5lY2Vzc2FyeSBhcGkgY2FsbHMgdG8gZmV0Y2ggdGhlIHNlbGVjdGVkIHBvc3RzIGFuZCByZXR1cm5zIGEgcHJvbWlzZS5cbiAgICAgKiBAcmV0dXJucyB7Kn1cbiAgICAgKi9cbiAgICByZXRyaWV2ZVNlbGVjdGVkUG9zdHMoKSB7XG4gICAgICAgIGNvbnN0IHsgcG9zdFR5cGUsIHNlbGVjdGVkUG9zdElkcyB9ID0gdGhpcy5wcm9wcztcbiAgICAgICAgY29uc3QgeyB0eXBlcyB9ID0gdGhpcy5zdGF0ZTtcblxuICAgICAgICBjb25zdCBwb3N0SWRzID0gdGhpcy5nZXRTZWxlY3RlZFBvc3RJZHMoKS5qb2luKCcsJyk7XG5cbiAgICAgICAgaWYgKCAhIHBvc3RJZHMgKSB7XG4gICAgICAgICAgICAvLyByZXR1cm4gYSBmYWtlIHByb21pc2UgdGhhdCBhdXRvIHJlc29sdmVzLlxuICAgICAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiByZXNvbHZlKCkpO1xuICAgICAgICB9XG5cbiAgICAgICAgbGV0IHBvc3RfYXJncyA9IHtcbiAgICAgICAgICAgIGluY2x1ZGU6IHBvc3RJZHMsXG4gICAgICAgICAgICBwZXJfcGFnZTogMTAwLFxuICAgICAgICAgICAgcG9zdFR5cGVcbiAgICAgICAgfTtcblxuICAgICAgICBpZiggdGhpcy5wcm9wcy5wb3N0U3RhdHVzICkge1xuICAgICAgICAgICAgcG9zdF9hcmdzLnN0YXR1cyA9IHRoaXMucHJvcHMucG9zdFN0YXR1cztcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0aGlzLmdldFBvc3RzKHtcbiAgICAgICAgICAgIC4uLnBvc3RfYXJnc1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBBZGRzIGRlc2lyZWQgcG9zdCBpZCB0byB0aGUgc2VsZWN0ZWRQb3N0SWRzIExpc3RcbiAgICAgKiBAcGFyYW0ge0ludGVnZXJ9IHBvc3RfaWRcbiAgICAgKi9cbiAgICBhZGRQb3N0KHBvc3RfaWQpIHtcbiAgICAgICAgaWYgKHRoaXMuc3RhdGUuZmlsdGVyKSB7XG4gICAgICAgICAgICBjb25zdCBwb3N0ID0gdGhpcy5zdGF0ZS5maWx0ZXJQb3N0cy5maWx0ZXIocCA9PiBwLmlkID09PSBwb3N0X2lkKTtcbiAgICAgICAgICAgIGNvbnN0IHBvc3RzID0gdW5pcXVlQnlJZChbXG4gICAgICAgICAgICAgICAgLi4udGhpcy5zdGF0ZS5wb3N0cyxcbiAgICAgICAgICAgICAgICAuLi5wb3N0XG4gICAgICAgICAgICBdKTtcblxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgcG9zdHNcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYoIHRoaXMucHJvcHMuc2VsZWN0U2luZ2xlICkge1xuICAgICAgICAgICAgY29uc3Qgc2VsZWN0ZWRQb3N0SWRzID0gWyBwb3N0X2lkIF07XG4gICAgICAgICAgICB0aGlzLnByb3BzLnVwZGF0ZVNlbGVjdGVkUG9zdElkcyggc2VsZWN0ZWRQb3N0SWRzICk7XG4gICAgICAgICAgICB0aGlzLmdldFNlbGVjdGVkUG9zdHMoIHNlbGVjdGVkUG9zdElkcyApO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY29uc3QgcG9zdElkcyA9IHRoaXMuZ2V0U2VsZWN0ZWRQb3N0SWRzKCk7XG4gICAgICAgICAgICBjb25zdCBzZWxlY3RlZFBvc3RJZHMgPSBbIC4uLnBvc3RJZHMsIHBvc3RfaWQgXTtcbiAgICAgICAgICAgIHRoaXMucHJvcHMudXBkYXRlU2VsZWN0ZWRQb3N0SWRzKCBzZWxlY3RlZFBvc3RJZHMgKTtcbiAgICAgICAgICAgIHRoaXMuZ2V0U2VsZWN0ZWRQb3N0cyggc2VsZWN0ZWRQb3N0SWRzICk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZW1vdmVzIGRlc2lyZWQgcG9zdCBpZCB0byB0aGUgc2VsZWN0ZWRQb3N0SWRzIExpc3RcbiAgICAgKiBAcGFyYW0ge0ludGVnZXJ9IHBvc3RfaWRcbiAgICAgKi9cbiAgICByZW1vdmVQb3N0KHBvc3RfaWQpIHtcbiAgICAgICAgY29uc3QgcG9zdElkcyA9IHRoaXMuZ2V0U2VsZWN0ZWRQb3N0SWRzKCk7XG4gICAgICAgIGNvbnN0IHNlbGVjdGVkUG9zdElkcyA9IFsgLi4ucG9zdElkcyBdLmZpbHRlcihpZCA9PiBpZCAhPT0gcG9zdF9pZCk7XG4gICAgICAgIHRoaXMucHJvcHMudXBkYXRlU2VsZWN0ZWRQb3N0SWRzKCBzZWxlY3RlZFBvc3RJZHMgKTtcbiAgICAgICAgdGhpcy5nZXRTZWxlY3RlZFBvc3RzKCBzZWxlY3RlZFBvc3RJZHMgKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBIYW5kbGVzIHRoZSBzZWFyY2ggYm94IGlucHV0IHZhbHVlXG4gICAgICogQHBhcmFtIHN0cmluZyB0eXBlIC0gY29tZXMgZnJvbSB0aGUgZXZlbnQgb2JqZWN0IHRhcmdldC5cbiAgICAgKi9cbiAgICBoYW5kbGVJbnB1dEZpbHRlckNoYW5nZSh7IHRhcmdldDogeyB2YWx1ZTpmaWx0ZXIgPSAnJyB9ID0ge30gfSA9IHt9KSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgZmlsdGVyXG4gICAgICAgIH0sICgpID0+IHtcbiAgICAgICAgICAgIGlmICghZmlsdGVyKSB7XG4gICAgICAgICAgICAgICAgLy8gcmVtb3ZlIGZpbHRlcmVkIHBvc3RzXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuc2V0U3RhdGUoeyBmaWx0ZXJlZFBvc3RzOiBbXSwgZmlsdGVyaW5nOiBmYWxzZSB9KTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdGhpcy5kb1Bvc3RGaWx0ZXIoKTtcbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBBY3R1YWwgYXBpIGNhbGwgZm9yIHNlYXJjaGluZyBmb3IgcXVlcnksIHRoaXMgZnVuY3Rpb24gaXMgZGVib3VuY2VkIGluIGNvbnN0cnVjdG9yLlxuICAgICAqL1xuICAgIGRvUG9zdEZpbHRlcigpIHtcbiAgICAgICAgY29uc3QgeyBmaWx0ZXIgPSAnJyB9ID0gdGhpcy5zdGF0ZTtcblxuICAgICAgICBpZiAoIWZpbHRlcikge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICBmaWx0ZXJpbmc6IHRydWUsXG4gICAgICAgICAgICBmaWx0ZXJMb2FkaW5nOiB0cnVlXG4gICAgICAgIH0pO1xuXG4gICAgICAgIGxldCBwb3N0X2FyZ3MgPSB7fTtcblxuICAgICAgICBpZiggdGhpcy5wcm9wcy5wb3N0U3RhdHVzICkge1xuICAgICAgICAgICAgcG9zdF9hcmdzLnN0YXR1cyA9IHRoaXMucHJvcHMucG9zdFN0YXR1cztcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuZ2V0UG9zdHMoe1xuICAgICAgICAgICAgLi4ucG9zdF9hcmdzXG4gICAgICAgIH0pLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgZmlsdGVyTG9hZGluZzogZmFsc2VcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZW5kZXJzIHRoZSBQb3N0U2VsZWN0b3IgY29tcG9uZW50LlxuICAgICAqL1xuICAgIHJlbmRlcigpIHtcbiAgICAgICAgY29uc3QgcG9zdExpc3QgPSB0aGlzLnN0YXRlLmZpbHRlcmluZyAmJiAhdGhpcy5zdGF0ZS5maWx0ZXJMb2FkaW5nID8gdGhpcy5zdGF0ZS5maWx0ZXJQb3N0cyA6IFtdO1xuXG4gICAgICAgIGNvbnN0IGFkZEljb24gPSA8SWNvbiBpY29uPVwicGx1c1wiIC8+O1xuICAgICAgICBjb25zdCByZW1vdmVJY29uID0gPEljb24gaWNvbj1cIm1pbnVzXCIgLz47XG5cbiAgICAgICAgY29uc3Qgc2VhcmNoaW5wdXR1bmlxdWVJZCA9ICdzZWFyY2hpbnB1dC0nICsgTWF0aC5yYW5kb20oKS50b1N0cmluZygzNikuc3Vic3RyKDIsIDE2KTtcblxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb21wb25lbnRzLWJhc2UtY29udHJvbCBjb21wb25lbnRzLXBvc3Qtc2VsZWN0b3JcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbXBvbmVudHMtYmFzZS1jb250cm9sX19maWVsZC0tc2VsZWN0ZWRcIj5cbiAgICAgICAgICAgICAgICAgICAgPGgyPntfXygnU2VhcmNoIFBvc3QnLCAndm9kaS1leHRlbnNpb25zJyl9PC9oMj5cbiAgICAgICAgICAgICAgICAgICAgPEl0ZW1MaXN0XG4gICAgICAgICAgICAgICAgICAgICAgICBpdGVtcz17IFsuLi50aGlzLnN0YXRlLnNlbGVjdGVkUG9zdHNdIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGxvYWRpbmc9e3RoaXMuc3RhdGUuaW5pdGlhbExvYWRpbmd9XG4gICAgICAgICAgICAgICAgICAgICAgICBhY3Rpb249e3RoaXMucmVtb3ZlUG9zdH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGljb249e3JlbW92ZUljb259XG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb21wb25lbnRzLWJhc2UtY29udHJvbF9fZmllbGRcIj5cbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9e3NlYXJjaGlucHV0dW5pcXVlSWR9IGNsYXNzTmFtZT1cImNvbXBvbmVudHMtYmFzZS1jb250cm9sX19sYWJlbFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPEljb24gaWNvbj1cInNlYXJjaFwiIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiY29tcG9uZW50cy10ZXh0LWNvbnRyb2xfX2lucHV0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkPXtzZWFyY2hpbnB1dHVuaXF1ZUlkfVxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInNlYXJjaFwiXG4gICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj17X18oJ1BsZWFzZSBlbnRlciB5b3VyIHNlYXJjaCBxdWVyeS4uLicsICd2b2RpLWV4dGVuc2lvbnMnKX1cbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLmZpbHRlcn1cbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUlucHV0RmlsdGVyQ2hhbmdlfVxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICA8SXRlbUxpc3RcbiAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW1zPXtwb3N0TGlzdH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGxvYWRpbmc9e3RoaXMuc3RhdGUuaW5pdGlhbExvYWRpbmd8fHRoaXMuc3RhdGUubG9hZGluZ3x8dGhpcy5zdGF0ZS5maWx0ZXJMb2FkaW5nfVxuICAgICAgICAgICAgICAgICAgICAgICAgZmlsdGVyZWQ9e3RoaXMuc3RhdGUuZmlsdGVyaW5nfVxuICAgICAgICAgICAgICAgICAgICAgICAgYWN0aW9uPXt0aGlzLmFkZFBvc3R9XG4gICAgICAgICAgICAgICAgICAgICAgICBpY29uPXthZGRJY29ufVxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgfVxufSIsImNvbnN0IHsgYXBpRmV0Y2ggfSA9IHdwO1xuXG4vKipcbiAqIE1ha2VzIGEgZ2V0IHJlcXVlc3QgdG8gdGhlIFBvc3RUeXBlcyBlbmRwb2ludC5cbiAqXG4gKiBAcmV0dXJucyB7UHJvbWlzZTxhbnk+fVxuICovXG5leHBvcnQgY29uc3QgZ2V0UG9zdFR5cGVzID0gKCkgPT4ge1xuICAgIHJldHVybiBhcGlGZXRjaCggeyBwYXRoOiAnL3dwL3YyL3R5cGVzJyB9ICk7XG59O1xuXG4vKipcbiAqIE1ha2VzIGEgZ2V0IHJlcXVlc3QgdG8gdGhlIGRlc2lyZWQgcG9zdCB0eXBlIGFuZCBidWlsZHMgdGhlIHF1ZXJ5IHN0cmluZyBiYXNlZCBvbiBhbiBvYmplY3QuXG4gKlxuICogQHBhcmFtIHtzdHJpbmd8Ym9vbGVhbn0gcmVzdEJhc2UgLSByZXN0IGJhc2UgZm9yIHRoZSBxdWVyeS5cbiAqIEBwYXJhbSB7b2JqZWN0fSBhcmdzXG4gKiBAcmV0dXJucyB7UHJvbWlzZTxhbnk+fVxuICovXG5leHBvcnQgY29uc3QgZ2V0UG9zdHMgPSAoeyByZXN0QmFzZSA9IGZhbHNlLCAuLi5hcmdzIH0pID0+IHtcbiAgICBjb25zdCBxdWVyeVN0cmluZyA9IE9iamVjdC5rZXlzKGFyZ3MpLm1hcChhcmcgPT4gYCR7YXJnfT0ke2FyZ3NbYXJnXX1gKS5qb2luKCcmJyk7XG5cbiAgICBsZXQgcGF0aCA9IGAvd3AvdjIvJHtyZXN0QmFzZX0/JHtxdWVyeVN0cmluZ30mX2VtYmVkYDtcbiAgICByZXR1cm4gYXBpRmV0Y2goIHsgcGF0aDogcGF0aCB9ICk7XG59O1xuXG4vKipcbiAqIE1ha2VzIGEgZ2V0IHJlcXVlc3QgdG8gdGhlIFBvc3RUeXBlIFRheG9ub21pZXMgZW5kcG9pbnQuXG4gKlxuICogQHJldHVybnMge1Byb21pc2U8YW55Pn1cbiAqL1xuZXhwb3J0IGNvbnN0IGdldFRheG9ub21pZXMgPSAoeyAuLi5hcmdzIH0pID0+IHtcbiAgICBjb25zdCBxdWVyeVN0cmluZyA9IE9iamVjdC5rZXlzKGFyZ3MpLm1hcChhcmcgPT4gYCR7YXJnfT0ke2FyZ3NbYXJnXX1gKS5qb2luKCcmJyk7XG5cbiAgICBsZXQgcGF0aCA9IGAvd3AvdjIvdGF4b25vbWllcz8ke3F1ZXJ5U3RyaW5nfSZfZW1iZWRgO1xuICAgIHJldHVybiBhcGlGZXRjaCggeyBwYXRoOiBwYXRoIH0gKTtcbn07XG5cbi8qKlxuICogTWFrZXMgYSBnZXQgcmVxdWVzdCB0byB0aGUgZGVzaXJlZCBwb3N0IHR5cGUgYW5kIGJ1aWxkcyB0aGUgcXVlcnkgc3RyaW5nIGJhc2VkIG9uIGFuIG9iamVjdC5cbiAqXG4gKiBAcGFyYW0ge3N0cmluZ3xib29sZWFufSByZXN0QmFzZSAtIHJlc3QgYmFzZSBmb3IgdGhlIHF1ZXJ5LlxuICogQHBhcmFtIHtvYmplY3R9IGFyZ3NcbiAqIEByZXR1cm5zIHtQcm9taXNlPGFueT59XG4gKi9cbmV4cG9ydCBjb25zdCBnZXRUZXJtcyA9ICh7IHJlc3RCYXNlID0gZmFsc2UsIC4uLmFyZ3MgfSkgPT4ge1xuICAgIGNvbnN0IHF1ZXJ5U3RyaW5nID0gT2JqZWN0LmtleXMoYXJncykubWFwKGFyZyA9PiBgJHthcmd9PSR7YXJnc1thcmddfWApLmpvaW4oJyYnKTtcblxuICAgIGxldCBwYXRoID0gYC93cC92Mi8ke3Jlc3RCYXNlfT8ke3F1ZXJ5U3RyaW5nfSZfZW1iZWRgO1xuICAgIHJldHVybiBhcGlGZXRjaCggeyBwYXRoOiBwYXRoIH0gKTtcbn07IiwiLyoqXG4gKiBSZXR1cm5zIGEgdW5pcXVlIGFycmF5IG9mIG9iamVjdHMgYmFzZWQgb24gYSBkZXNpcmVkIGtleS5cbiAqIEBwYXJhbSB7YXJyYXl9IGFyciAtIGFycmF5IG9mIG9iamVjdHMuXG4gKiBAcGFyYW0ge3N0cmluZ3xpbnR9IGtleSAtIGtleSB0byBmaWx0ZXIgb2JqZWN0cyBieVxuICovXG5leHBvcnQgY29uc3QgdW5pcXVlQnkgPSAoYXJyLCBrZXkpID0+IHtcbiAgICBsZXQga2V5cyA9IFtdO1xuICAgIHJldHVybiBhcnIuZmlsdGVyKGl0ZW0gPT4ge1xuICAgICAgICBpZiAoa2V5cy5pbmRleE9mKGl0ZW1ba2V5XSkgIT09IC0xKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4ga2V5cy5wdXNoKGl0ZW1ba2V5XSk7XG4gICAgfSk7XG59O1xuXG4vKipcbiAqIFJldHVybnMgYSB1bmlxdWUgYXJyYXkgb2Ygb2JqZWN0cyBiYXNlZCBvbiB0aGUgaWQgcHJvcGVydHkuXG4gKiBAcGFyYW0ge2FycmF5fSBhcnIgLSBhcnJheSBvZiBvYmplY3RzIHRvIGZpbHRlci5cbiAqIEByZXR1cm5zIHsqfVxuICovXG5leHBvcnQgY29uc3QgdW5pcXVlQnlJZCA9IGFyciA9PiB1bmlxdWVCeShhcnIsICdpZCcpO1xuXG4vKipcbiAqIERlYm91bmNlIGEgZnVuY3Rpb24gYnkgbGltaXRpbmcgaG93IG9mdGVuIGl0IGNhbiBydW4uXG4gKiBAcGFyYW0ge2Z1bmN0aW9ufSBmdW5jIC0gY2FsbGJhY2sgZnVuY3Rpb25cbiAqIEBwYXJhbSB7SW50ZWdlcn0gd2FpdCAtIFRpbWUgaW4gbWlsbGlzZWNvbmRzIGhvdyBsb25nIGl0IHNob3VsZCB3YWl0LlxuICogQHJldHVybnMge0Z1bmN0aW9ufVxuICovXG5leHBvcnQgY29uc3QgZGVib3VuY2UgPSAoZnVuYywgd2FpdCkgPT4ge1xuICAgIGxldCB0aW1lb3V0ID0gbnVsbDtcblxuICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzO1xuICAgICAgICBjb25zdCBhcmdzID0gYXJndW1lbnRzO1xuXG4gICAgICAgIGNvbnN0IGxhdGVyID0gKCkgPT4ge1xuICAgICAgICAgICAgZnVuYy5hcHBseShjb250ZXh0LCBhcmdzKTtcbiAgICAgICAgfTtcblxuICAgICAgICBjbGVhclRpbWVvdXQodGltZW91dCk7XG4gICAgICAgIHRpbWVvdXQgPSBzZXRUaW1lb3V0KGxhdGVyLCB3YWl0KTtcbiAgICB9XG59OyJdfQ==
