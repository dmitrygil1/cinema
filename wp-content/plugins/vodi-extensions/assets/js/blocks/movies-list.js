(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

var _Repeater = require("../components/Repeater");

var _ShortcodeAtts = require("../components/ShortcodeAtts");

var _DesignOptions = require("../components/DesignOptions");

var _PostSelector = require("../components/PostSelector");

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
registerBlockType('vodi/movies-list', {
  title: __('Movies List', 'vodi-extensions'),
  icon: 'editor-video',
  category: 'vodi-blocks',
  edit: props => {
    const {
      attributes,
      setAttributes
    } = props;
    const {
      section_title_1,
      section_title_2,
      section_nav_links_1,
      section_nav_links_2,
      shortcode_atts_1,
      shortcode_atts_2,
      featured_movie_id,
      design_options
    } = attributes;

    const onChangeSectionTitle1 = newSectionTitle1 => {
      setAttributes({
        section_title_1: newSectionTitle1
      });
    };

    const onChangeSectionTitle2 = newSectionTitle2 => {
      setAttributes({
        section_title_2: newSectionTitle2
      });
    };

    const onChangeSectionNavLinks1 = newSectionNavLinks1 => {
      setAttributes({
        section_nav_links_1: JSON.stringify([...newSectionNavLinks1])
      });
    };

    const onChangeSectionNavLinks2 = newSectionNavLinks2 => {
      setAttributes({
        section_nav_links_2: JSON.stringify([...newSectionNavLinks2])
      });
    };

    const onChangeSectionNavLinksText1 = (newSectionNavLinksText1, index) => {
      var section_nav_links_1_updated = JSON.parse(section_nav_links_1);
      section_nav_links_1_updated[index].title = newSectionNavLinksText1;
      setAttributes({
        section_nav_links_1: JSON.stringify([...section_nav_links_1_updated])
      });
    };

    const onChangeSectionNavLinksLink1 = (newSectionNavLinksLink1, index) => {
      var section_nav_links_1_updated = JSON.parse(section_nav_links_1);
      section_nav_links_1_updated[index].link = newSectionNavLinksLink1;
      setAttributes({
        section_nav_links_1: JSON.stringify([...section_nav_links_1_updated])
      });
    };

    const onChangeSectionNavLinksText2 = (newSectionNavLinksText2, index) => {
      var section_nav_links_2_updated = JSON.parse(section_nav_links_2);
      section_nav_links_2_updated[index].title = newSectionNavLinksText2;
      setAttributes({
        section_nav_links_2: JSON.stringify([...section_nav_links_2_updated])
      });
    };

    const onChangeSectionNavLinksLink2 = (newSectionNavLinksLink2, index) => {
      var section_nav_links_2_updated = JSON.parse(section_nav_links_2);
      section_nav_links_2_updated[index].link = newSectionNavLinksLink2;
      setAttributes({
        section_nav_links_2: JSON.stringify([...section_nav_links_2_updated])
      });
    };

    const onChangeShortcodeAtts1 = newShortcodeAtts1 => {
      setAttributes({
        shortcode_atts_1: { ...shortcode_atts_1,
          ...newShortcodeAtts1
        }
      });
    };

    const onChangeShortcodeAtts2 = newShortcodeAtts2 => {
      setAttributes({
        shortcode_atts_2: { ...shortcode_atts_2,
          ...newShortcodeAtts2
        }
      });
    };

    const onChangeIds = newIds => {
      setAttributes({
        featured_movie_id: newIds.join(',')
      });
    };

    const onChangeDesignOptions = newDesignOptions => {
      setAttributes({
        design_options: { ...design_options,
          ...newDesignOptions
        }
      });
    };

    return wp.element.createElement(Fragment, null, wp.element.createElement(InspectorControls, null, wp.element.createElement(PanelBody, {
      title: __('Movies List', 'vodi-extensions'),
      initialOpen: true
    }, wp.element.createElement(TextControl, {
      label: __('Section Title', 'vodi-extensions'),
      value: section_title_1,
      onChange: onChangeSectionTitle1
    }), wp.element.createElement(_Repeater.Repeater, {
      title: __('Nav Links', 'vodi-extensions'),
      values: section_nav_links_1 ? JSON.parse(section_nav_links_1) : [],
      defaultValues: {
        title: '',
        link: ''
      },
      updateValues: onChangeSectionNavLinks1
    }, wp.element.createElement(TextControl, {
      label: __('Action Text', 'vodi-extensions'),
      name: "title",
      valuekey: "value",
      value: "",
      trigger_method_name: "onChange",
      onChange: onChangeSectionNavLinksText1
    }), wp.element.createElement(TextControl, {
      label: __('Action Link', 'vodi-extensions'),
      name: "link",
      valuekey: "value",
      value: "",
      trigger_method_name: "onChange",
      onChange: onChangeSectionNavLinksLink1
    })), wp.element.createElement(PanelBody, {
      title: __('Movies List Attribute 1', 'vodi-extensions'),
      initialOpen: true
    }, wp.element.createElement(_ShortcodeAtts.ShortcodeAtts, {
      postType: "movie",
      catTaxonomy: "movie_cat",
      tagTaxonomy: "movie_tag",
      hideFields: ['columns'],
      attributes: { ...shortcode_atts_1
      },
      updateShortcodeAtts: onChangeShortcodeAtts1
    }))), wp.element.createElement(PanelBody, {
      title: __('Featured Movie with Movies List', 'vodi-extensions'),
      initialOpen: true
    }, wp.element.createElement(TextControl, {
      label: __('Section Title', 'vodi-extensions'),
      value: section_title_2,
      onChange: onChangeSectionTitle2
    }), wp.element.createElement(_Repeater.Repeater, {
      title: __('Nav Links', 'vodi-extensions'),
      values: section_nav_links_2 ? JSON.parse(section_nav_links_2) : [],
      defaultValues: {
        title: '',
        link: ''
      },
      updateValues: onChangeSectionNavLinks2
    }, wp.element.createElement(TextControl, {
      label: __('Action Text', 'vodi-extensions'),
      name: "title",
      valuekey: "value",
      value: "",
      trigger_method_name: "onChange",
      onChange: onChangeSectionNavLinksText2
    }), wp.element.createElement(TextControl, {
      label: __('Action Link', 'vodi-extensions'),
      name: "link",
      valuekey: "value",
      value: "",
      trigger_method_name: "onChange",
      onChange: onChangeSectionNavLinksLink2
    })), wp.element.createElement(_PostSelector.PostSelector, {
      label: __('Enter Featured Movie Id', 'vodi-extensions'),
      postType: "movie",
      selectSingle: true,
      selectedPostIds: featured_movie_id ? featured_movie_id.split(',').map(Number) : [],
      updateSelectedPostIds: onChangeIds
    }), wp.element.createElement(PanelBody, {
      title: __('Movies List Attribute 2', 'vodi-extensions'),
      initialOpen: true
    }, wp.element.createElement(_ShortcodeAtts.ShortcodeAtts, {
      postType: "movie",
      catTaxonomy: "movie_cat",
      tagTaxonomy: "movie_tag",
      hideFields: ['columns'],
      attributes: { ...shortcode_atts_2
      },
      updateShortcodeAtts: onChangeShortcodeAtts2
    }))), wp.element.createElement(PanelBody, {
      title: __('Design Options', 'vodi-extensions'),
      initialOpen: false
    }, wp.element.createElement(_DesignOptions.DesignOptions, {
      attributes: { ...design_options
      },
      updateDesignOptions: onChangeDesignOptions
    }))), wp.element.createElement(Disabled, null, wp.element.createElement(ServerSideRender, {
      block: "vodi/movies-list",
      attributes: attributes
    })));
  },

  save() {
    // Rendering in PHP
    return null;
  }

});

},{"../components/DesignOptions":2,"../components/PostSelector":5,"../components/Repeater":6,"../components/ShortcodeAtts":7}],2:[function(require,module,exports){
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

},{}],4:[function(require,module,exports){
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

},{"./Item":3}],5:[function(require,module,exports){
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

},{"../utils/api":9,"../utils/useful-funcs":10,"./ItemList":4}],6:[function(require,module,exports){
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

},{}],7:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ShortcodeAtts = void 0;

var _PostSelector = require("./PostSelector");

var _TermSelector = require("./TermSelector");

const {
  __
} = wp.i18n;
const {
  Component
} = wp.element;
const {
  RangeControl,
  SelectControl,
  CheckboxControl
} = wp.components;
const {
  applyFilters
} = wp.hooks;
/**
 * ShortcodeAtts Component
 */

class ShortcodeAtts extends Component {
  /**
   * Constructor for ShortcodeAtts Component.
   * Sets up state, and creates bindings for functions.
   * @param object props - current component properties.
   */
  constructor(props) {
    super(...arguments);
    this.props = props;
    this.onChangeLimit = this.onChangeLimit.bind(this);
    this.onChangeColumns = this.onChangeColumns.bind(this);
    this.onChangeOrderby = this.onChangeOrderby.bind(this);
    this.onChangeOrder = this.onChangeOrder.bind(this);
    this.onChangeIds = this.onChangeIds.bind(this);
    this.onChangeCategory = this.onChangeCategory.bind(this);
    this.onChangeGenre = this.onChangeGenre.bind(this);
    this.onChangeTag = this.onChangeTag.bind(this);
    this.onChangeFeatured = this.onChangeFeatured.bind(this);
    this.onChangeTopRated = this.onChangeTopRated.bind(this);
  }

  onChangeLimit(newLimit) {
    this.props.updateShortcodeAtts({
      limit: newLimit
    });
  }

  onChangeColumns(newColumns) {
    this.props.updateShortcodeAtts({
      columns: newColumns
    });
  }

  onChangeOrderby(newOrderby) {
    this.props.updateShortcodeAtts({
      orderby: newOrderby
    });
  }

  onChangeOrder(newOrder) {
    this.props.updateShortcodeAtts({
      order: newOrder
    });
  }

  onChangeIds(newIds) {
    this.props.updateShortcodeAtts({
      ids: newIds.join(',')
    });
  }

  onChangeCategory(newCategory) {
    this.props.updateShortcodeAtts({
      category: newCategory.join(',')
    });
  }

  onChangeGenre(newGenre) {
    this.props.updateShortcodeAtts({
      genre: newGenre.join(',')
    });
  }

  onChangeTag(newTag) {
    this.props.updateShortcodeAtts({
      tag: newTag.join(',')
    });
  }

  onChangeFeatured(newFeatured) {
    this.props.updateShortcodeAtts({
      featured: newFeatured
    });
  }

  onChangeTopRated(newTopRated) {
    this.props.updateShortcodeAtts({
      top_rated: newTopRated
    });
  }
  /**
   * Renders the ShortcodeAtts component.
   */


  render() {
    const {
      attributes,
      postType,
      postStatus,
      catTaxonomy,
      tagTaxonomy,
      minLimit = 1,
      maxLimit = 20,
      minColumns = 1,
      maxColumns = 6,
      hideFields
    } = this.props;
    const {
      limit,
      columns,
      orderby,
      order,
      ids,
      category,
      genre,
      tag,
      featured,
      top_rated
    } = attributes;
    return wp.element.createElement("div", null, !(hideFields && hideFields.includes('limit')) ? wp.element.createElement(RangeControl, {
      label: __('Limit', 'vodi-extensions'),
      value: limit,
      onChange: this.onChangeLimit,
      min: applyFilters('vodi.component.shortcodeAtts.limit.min', minLimit),
      max: applyFilters('vodi.component.shortcodeAtts.limit.max', maxLimit)
    }) : '', !(hideFields && hideFields.includes('columns')) ? wp.element.createElement(RangeControl, {
      label: __('Columns', 'vodi-extensions'),
      value: columns,
      onChange: this.onChangeColumns,
      min: applyFilters('vodi.component.shortcodeAtts.columns.min', minColumns),
      max: applyFilters('vodi.component.shortcodeAtts.columns.max', maxColumns)
    }) : '', !(hideFields && hideFields.includes('orderby')) ? wp.element.createElement(SelectControl, {
      label: __('Orderby', 'vodi-extensions'),
      value: orderby,
      options: applyFilters('vodi.component.shortcodeAtts.orderby.options', [{
        label: __('Title', 'vodi-extensions'),
        value: 'title'
      }, {
        label: __('Date', 'vodi-extensions'),
        value: postType === 'movie' ? 'release_date' : 'date'
      }, {
        label: __('ID', 'vodi-extensions'),
        value: 'id'
      }, {
        label: __('Random', 'vodi-extensions'),
        value: 'rand'
      }], this.props),
      onChange: this.onChangeOrderby
    }) : '', !(hideFields && hideFields.includes('order')) ? wp.element.createElement(SelectControl, {
      label: __('Order', 'vodi-extensions'),
      value: order,
      options: applyFilters('vodi.component.shortcodeAtts.order.options', [{
        label: __('ASC', 'vodi-extensions'),
        value: 'ASC'
      }, {
        label: __('DESC', 'vodi-extensions'),
        value: 'DESC'
      }], this.props),
      onChange: this.onChangeOrder
    }) : '', !(hideFields && hideFields.includes('ids')) ? wp.element.createElement(_PostSelector.PostSelector, {
      postType: postType,
      postStatus: postStatus,
      selectedPostIds: ids ? ids.split(',').map(Number) : [],
      updateSelectedPostIds: this.onChangeIds
    }) : '', postType === 'video' && catTaxonomy && !(hideFields && hideFields.includes('category')) ? wp.element.createElement(_TermSelector.TermSelector, {
      postType: postType,
      taxonomy: catTaxonomy,
      title: __('Search Category', 'vodi-extensions'),
      selectedTermIds: category ? category.split(',').map(Number) : [],
      updateSelectedTermIds: this.onChangeCategory
    }) : catTaxonomy && !(hideFields && hideFields.includes('genre')) ? wp.element.createElement(_TermSelector.TermSelector, {
      postType: postType,
      taxonomy: catTaxonomy,
      title: __('Search Genre', 'vodi-extensions'),
      selectedTermIds: genre ? genre.split(',').map(Number) : [],
      updateSelectedTermIds: this.onChangeGenre
    }) : '', !(hideFields && hideFields.includes('tag')) ? wp.element.createElement(_TermSelector.TermSelector, {
      postType: postType,
      taxonomy: tagTaxonomy,
      title: __('Search Tag', 'vodi-extensions'),
      selectedTermIds: tag ? tag.split(',').map(Number) : [],
      updateSelectedTermIds: this.onChangeTag
    }) : '', !(hideFields && hideFields.includes('featured')) ? wp.element.createElement(CheckboxControl, {
      label: __('Featured', 'vodi-extensions'),
      help: __('Check to select featured posts.', 'vodi-extensions'),
      checked: featured,
      onChange: this.onChangeFeatured
    }) : '', !(hideFields && hideFields.includes('top_rated')) ? wp.element.createElement(CheckboxControl, {
      label: __('Top Rated', 'vodi-extensions'),
      help: __('Check to select top rated posts.', 'vodi-extensions'),
      checked: top_rated,
      onChange: this.onChangeTopRated
    }) : '');
  }

}

exports.ShortcodeAtts = ShortcodeAtts;

},{"./PostSelector":5,"./TermSelector":8}],8:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TermSelector = void 0;

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
 * TermSelector Component
 */

class TermSelector extends Component {
  /**
   * Constructor for TermSelector Component.
   * Sets up state, and creates bindings for functions.
   * @param object props - current component properties.
   */
  constructor(props) {
    super(...arguments);
    this.props = props;
    this.state = {
      terms: [],
      loading: false,
      type: props.postType || 'post',
      taxonomy: props.taxonomy || 'category',
      taxonomies: [],
      filter: '',
      filterLoading: false,
      filterTerms: [],
      initialLoading: false
    };
    this.addTerm = this.addTerm.bind(this);
    this.removeTerm = this.removeTerm.bind(this);
    this.handleInputFilterChange = this.handleInputFilterChange.bind(this);
    this.doTermFilter = (0, _usefulFuncs.debounce)(this.doTermFilter.bind(this), 300);
  }
  /**
   * When the component mounts it calls this function.
   * Fetches terms taxonomies, selected terms then makes first call for terms
   */


  componentDidMount() {
    this.setState({
      initialLoading: true
    });
    api.getTaxonomies({
      type: this.state.type
    }).then(response => {
      this.setState({
        taxonomies: response
      }, () => {
        this.retrieveSelectedTerms().then(() => {
          this.setState({
            initialLoading: false
          });
        });
      });
    });
  }
  /**
   * GetTerms wrapper, builds the request argument based state and parameters passed/
   * @param {object} args - desired arguments (can be empty).
   * @returns {Promise<T>}
   */


  getTerms() {
    let args = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    const {
      selectedTermIds
    } = this.props;
    const defaultArgs = {
      per_page: 10,
      type: this.state.type,
      taxonomy: this.state.taxonomy,
      search: this.state.filter
    };
    const requestArguments = { ...defaultArgs,
      ...args
    };
    requestArguments.restBase = this.state.taxonomies[this.state.taxonomy].rest_base;
    return api.getTerms(requestArguments).then(response => {
      if (requestArguments.search) {
        this.setState({
          filterTerms: response.filter(_ref => {
            let {
              id
            } = _ref;
            return selectedTermIds.indexOf(id) === -1;
          })
        });
        return response;
      }

      this.setState({
        terms: (0, _usefulFuncs.uniqueById)([...this.state.terms, ...response])
      }); // return response to continue the chain

      return response;
    });
  }
  /**
   * Gets the selected terms by id from the `terms` state object and sorts them by their position in the selected array.
   * @returns Array of objects.
   */


  getSelectedTerms() {
    const {
      selectedTermIds
    } = this.props;
    return this.state.terms.filter(_ref2 => {
      let {
        id
      } = _ref2;
      return selectedTermIds.indexOf(id) !== -1;
    }).sort((a, b) => {
      const aIndex = this.props.selectedTermIds.indexOf(a.id);
      const bIndex = this.props.selectedTermIds.indexOf(b.id);

      if (aIndex > bIndex) {
        return 1;
      }

      if (aIndex < bIndex) {
        return -1;
      }

      return 0;
    });
  }
  /**
   * Makes the necessary api calls to fetch the selected terms and returns a promise.
   * @returns {*}
   */


  retrieveSelectedTerms() {
    const {
      termType,
      selectedTermIds
    } = this.props;
    const {
      taxonomies
    } = this.state;

    if (selectedTermIds && !selectedTermIds.length > 0) {
      // return a fake promise that auto resolves.
      return new Promise(resolve => resolve());
    }

    return this.getTerms({
      include: this.props.selectedTermIds.join(','),
      per_page: 100,
      termType
    });
  }
  /**
   * Adds desired term id to the selectedTermIds List
   * @param {Integer} term_id
   */


  addTerm(term_id) {
    if (this.state.filter) {
      const term = this.state.filterTerms.filter(p => p.id === term_id);
      const terms = (0, _usefulFuncs.uniqueById)([...this.state.terms, ...term]);
      this.setState({
        terms
      });
    }

    this.props.updateSelectedTermIds([...this.props.selectedTermIds, term_id]);
  }
  /**
   * Removes desired term id to the selectedTermIds List
   * @param {Integer} term_id
   */


  removeTerm(term_id) {
    this.props.updateSelectedTermIds([...this.props.selectedTermIds].filter(id => id !== term_id));
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
        // remove filtered terms
        return this.setState({
          filteredTerms: [],
          filtering: false
        });
      }

      this.doTermFilter();
    });
  }
  /**
   * Actual api call for searching for query, this function is debounced in constructor.
   */


  doTermFilter() {
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
    this.getTerms().then(() => {
      this.setState({
        filterLoading: false
      });
    });
  }
  /**
   * Renders the TermSelector component.
   */


  render() {
    const {
      title = __('Search Term', 'vodi')
    } = this.props;
    const isFiltered = this.state.filtering;
    const termList = isFiltered && !this.state.filterLoading ? this.state.filterTerms : [];
    const SelectedTermList = this.getSelectedTerms();
    const addIcon = wp.element.createElement(Icon, {
      icon: "plus"
    });
    const removeIcon = wp.element.createElement(Icon, {
      icon: "minus"
    });
    const searchinputuniqueId = 'searchinput-' + Math.random().toString(36).substr(2, 16);
    return wp.element.createElement("div", {
      className: "components-base-control components-term-selector"
    }, wp.element.createElement("div", {
      className: "components-base-control__field--selected"
    }, wp.element.createElement("h2", null, title), wp.element.createElement(_ItemList.ItemList, {
      items: SelectedTermList,
      loading: this.state.initialLoading,
      action: this.removeTerm,
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
      items: termList,
      loading: this.state.initialLoading || this.state.loading || this.state.filterLoading,
      filtered: isFiltered,
      action: this.addTerm,
      icon: addIcon
    })));
  }

}

exports.TermSelector = TermSelector;

},{"../utils/api":9,"../utils/useful-funcs":10,"./ItemList":4}],9:[function(require,module,exports){
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

},{}],10:[function(require,module,exports){
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvcGx1Z2lucy92b2RpLWV4dGVuc2lvbnMvYXNzZXRzL2VzbmV4dC9ibG9ja3MvbW92aWVzLWxpc3QuanMiLCJzcmMvcGx1Z2lucy92b2RpLWV4dGVuc2lvbnMvYXNzZXRzL2VzbmV4dC9jb21wb25lbnRzL0Rlc2lnbk9wdGlvbnMuanMiLCJzcmMvcGx1Z2lucy92b2RpLWV4dGVuc2lvbnMvYXNzZXRzL2VzbmV4dC9jb21wb25lbnRzL0l0ZW0uanMiLCJzcmMvcGx1Z2lucy92b2RpLWV4dGVuc2lvbnMvYXNzZXRzL2VzbmV4dC9jb21wb25lbnRzL0l0ZW1MaXN0LmpzIiwic3JjL3BsdWdpbnMvdm9kaS1leHRlbnNpb25zL2Fzc2V0cy9lc25leHQvY29tcG9uZW50cy9Qb3N0U2VsZWN0b3IuanMiLCJzcmMvcGx1Z2lucy92b2RpLWV4dGVuc2lvbnMvYXNzZXRzL2VzbmV4dC9jb21wb25lbnRzL1JlcGVhdGVyLmpzIiwic3JjL3BsdWdpbnMvdm9kaS1leHRlbnNpb25zL2Fzc2V0cy9lc25leHQvY29tcG9uZW50cy9TaG9ydGNvZGVBdHRzLmpzIiwic3JjL3BsdWdpbnMvdm9kaS1leHRlbnNpb25zL2Fzc2V0cy9lc25leHQvY29tcG9uZW50cy9UZXJtU2VsZWN0b3IuanMiLCJzcmMvcGx1Z2lucy92b2RpLWV4dGVuc2lvbnMvYXNzZXRzL2VzbmV4dC91dGlscy9hcGkuanMiLCJzcmMvcGx1Z2lucy92b2RpLWV4dGVuc2lvbnMvYXNzZXRzL2VzbmV4dC91dGlscy91c2VmdWwtZnVuY3MuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7OztBQ0FBOztBQUNBOztBQUNBOztBQUNBOztBQUVBLE1BQU07QUFBRSxFQUFBO0FBQUYsSUFBUyxFQUFFLENBQUMsSUFBbEI7QUFDQSxNQUFNO0FBQUUsRUFBQTtBQUFGLElBQXdCLEVBQUUsQ0FBQyxNQUFqQztBQUNBLE1BQU07QUFBRSxF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b24oKXtmdW5jdGlvbiByKGUsbix0KXtmdW5jdGlvbiBvKGksZil7aWYoIW5baV0pe2lmKCFlW2ldKXt2YXIgYz1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlO2lmKCFmJiZjKXJldHVybiBjKGksITApO2lmKHUpcmV0dXJuIHUoaSwhMCk7dmFyIGE9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitpK1wiJ1wiKTt0aHJvdyBhLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsYX12YXIgcD1uW2ldPXtleHBvcnRzOnt9fTtlW2ldWzBdLmNhbGwocC5leHBvcnRzLGZ1bmN0aW9uKHIpe3ZhciBuPWVbaV1bMV1bcl07cmV0dXJuIG8obnx8cil9LHAscC5leHBvcnRzLHIsZSxuLHQpfXJldHVybiBuW2ldLmV4cG9ydHN9Zm9yKHZhciB1PVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmUsaT0wO2k8dC5sZW5ndGg7aSsrKW8odFtpXSk7cmV0dXJuIG99cmV0dXJuIHJ9KSgpIiwiaW1wb3J0IHsgUmVwZWF0ZXIgfSBmcm9tICcuLi9jb21wb25lbnRzL1JlcGVhdGVyJztcbmltcG9ydCB7IFNob3J0Y29kZUF0dHMgfSBmcm9tICcuLi9jb21wb25lbnRzL1Nob3J0Y29kZUF0dHMnO1xuaW1wb3J0IHsgRGVzaWduT3B0aW9ucyB9IGZyb20gJy4uL2NvbXBvbmVudHMvRGVzaWduT3B0aW9ucyc7XG5pbXBvcnQgeyBQb3N0U2VsZWN0b3IgfSBmcm9tICcuLi9jb21wb25lbnRzL1Bvc3RTZWxlY3Rvcic7XG5cbmNvbnN0IHsgX18gfSA9IHdwLmkxOG47XG5jb25zdCB7IHJlZ2lzdGVyQmxvY2tUeXBlIH0gPSB3cC5ibG9ja3M7XG5jb25zdCB7IEluc3BlY3RvckNvbnRyb2xzIH0gPSB3cC5ibG9ja0VkaXRvcjtcbmNvbnN0IHsgRnJhZ21lbnQgfSA9IHdwLmVsZW1lbnQ7XG5jb25zdCB7IERpc2FibGVkLCBQYW5lbEJvZHksIFRleHRDb250cm9sLCBTZWxlY3RDb250cm9sIH0gPSB3cC5jb21wb25lbnRzO1xuY29uc3QgeyBzZXJ2ZXJTaWRlUmVuZGVyOiBTZXJ2ZXJTaWRlUmVuZGVyIH0gPSB3cDtcblxucmVnaXN0ZXJCbG9ja1R5cGUoICd2b2RpL21vdmllcy1saXN0Jywge1xuICAgIHRpdGxlOiBfXygnTW92aWVzIExpc3QnLCAndm9kaS1leHRlbnNpb25zJyksXG5cbiAgICBpY29uOiAnZWRpdG9yLXZpZGVvJyxcblxuICAgIGNhdGVnb3J5OiAndm9kaS1ibG9ja3MnLFxuXG4gICAgZWRpdDogKCAoIHByb3BzICkgPT4ge1xuICAgICAgICBjb25zdCB7IGF0dHJpYnV0ZXMsIHNldEF0dHJpYnV0ZXMgfSA9IHByb3BzO1xuICAgICAgICBjb25zdCB7IHNlY3Rpb25fdGl0bGVfMSwgc2VjdGlvbl90aXRsZV8yLCBzZWN0aW9uX25hdl9saW5rc18xLCBzZWN0aW9uX25hdl9saW5rc18yLCBzaG9ydGNvZGVfYXR0c18xLCBzaG9ydGNvZGVfYXR0c18yLCBmZWF0dXJlZF9tb3ZpZV9pZCwgZGVzaWduX29wdGlvbnMgfSA9IGF0dHJpYnV0ZXM7XG5cbiAgICAgICAgY29uc3Qgb25DaGFuZ2VTZWN0aW9uVGl0bGUxID0gbmV3U2VjdGlvblRpdGxlMSA9PiB7XG4gICAgICAgICAgICBzZXRBdHRyaWJ1dGVzKCB7IHNlY3Rpb25fdGl0bGVfMTogbmV3U2VjdGlvblRpdGxlMSB9ICk7XG4gICAgICAgIH07XG5cbiAgICAgICAgY29uc3Qgb25DaGFuZ2VTZWN0aW9uVGl0bGUyID0gbmV3U2VjdGlvblRpdGxlMiA9PiB7XG4gICAgICAgICAgICBzZXRBdHRyaWJ1dGVzKCB7IHNlY3Rpb25fdGl0bGVfMjogbmV3U2VjdGlvblRpdGxlMiB9ICk7XG4gICAgICAgIH07XG5cbiAgICAgICAgY29uc3Qgb25DaGFuZ2VTZWN0aW9uTmF2TGlua3MxID0gbmV3U2VjdGlvbk5hdkxpbmtzMSA9PiB7XG4gICAgICAgICAgICBzZXRBdHRyaWJ1dGVzKCB7IHNlY3Rpb25fbmF2X2xpbmtzXzE6IEpTT04uc3RyaW5naWZ5KFsuLi5uZXdTZWN0aW9uTmF2TGlua3MxXSkgfSApO1xuICAgICAgICB9O1xuXG4gICAgICAgIGNvbnN0IG9uQ2hhbmdlU2VjdGlvbk5hdkxpbmtzMiA9IG5ld1NlY3Rpb25OYXZMaW5rczIgPT4ge1xuICAgICAgICAgICAgc2V0QXR0cmlidXRlcyggeyBzZWN0aW9uX25hdl9saW5rc18yOiBKU09OLnN0cmluZ2lmeShbLi4ubmV3U2VjdGlvbk5hdkxpbmtzMl0pIH0gKTtcbiAgICAgICAgfTtcblxuICAgICAgICBjb25zdCBvbkNoYW5nZVNlY3Rpb25OYXZMaW5rc1RleHQxID0gKG5ld1NlY3Rpb25OYXZMaW5rc1RleHQxLCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgdmFyIHNlY3Rpb25fbmF2X2xpbmtzXzFfdXBkYXRlZCA9IEpTT04ucGFyc2Uoc2VjdGlvbl9uYXZfbGlua3NfMSk7XG4gICAgICAgICAgICBzZWN0aW9uX25hdl9saW5rc18xX3VwZGF0ZWRbaW5kZXhdLnRpdGxlID0gbmV3U2VjdGlvbk5hdkxpbmtzVGV4dDE7XG4gICAgICAgICAgICBzZXRBdHRyaWJ1dGVzKCB7IHNlY3Rpb25fbmF2X2xpbmtzXzE6IEpTT04uc3RyaW5naWZ5KFsuLi5zZWN0aW9uX25hdl9saW5rc18xX3VwZGF0ZWRdKSB9ICk7XG4gICAgICAgIH07XG5cbiAgICAgICAgY29uc3Qgb25DaGFuZ2VTZWN0aW9uTmF2TGlua3NMaW5rMSA9IChuZXdTZWN0aW9uTmF2TGlua3NMaW5rMSwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgIHZhciBzZWN0aW9uX25hdl9saW5rc18xX3VwZGF0ZWQgPSBKU09OLnBhcnNlKHNlY3Rpb25fbmF2X2xpbmtzXzEpO1xuICAgICAgICAgICAgc2VjdGlvbl9uYXZfbGlua3NfMV91cGRhdGVkW2luZGV4XS5saW5rID0gbmV3U2VjdGlvbk5hdkxpbmtzTGluazE7XG4gICAgICAgICAgICBzZXRBdHRyaWJ1dGVzKCB7IHNlY3Rpb25fbmF2X2xpbmtzXzE6IEpTT04uc3RyaW5naWZ5KFsuLi5zZWN0aW9uX25hdl9saW5rc18xX3VwZGF0ZWRdKSB9ICk7XG4gICAgICAgIH07XG5cbiAgICAgICAgY29uc3Qgb25DaGFuZ2VTZWN0aW9uTmF2TGlua3NUZXh0MiA9IChuZXdTZWN0aW9uTmF2TGlua3NUZXh0MiwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgIHZhciBzZWN0aW9uX25hdl9saW5rc18yX3VwZGF0ZWQgPSBKU09OLnBhcnNlKHNlY3Rpb25fbmF2X2xpbmtzXzIpO1xuICAgICAgICAgICAgc2VjdGlvbl9uYXZfbGlua3NfMl91cGRhdGVkW2luZGV4XS50aXRsZSA9IG5ld1NlY3Rpb25OYXZMaW5rc1RleHQyO1xuICAgICAgICAgICAgc2V0QXR0cmlidXRlcyggeyBzZWN0aW9uX25hdl9saW5rc18yOiBKU09OLnN0cmluZ2lmeShbLi4uc2VjdGlvbl9uYXZfbGlua3NfMl91cGRhdGVkXSkgfSApO1xuICAgICAgICB9O1xuXG4gICAgICAgIGNvbnN0IG9uQ2hhbmdlU2VjdGlvbk5hdkxpbmtzTGluazIgPSAobmV3U2VjdGlvbk5hdkxpbmtzTGluazIsIGluZGV4KSA9PiB7XG4gICAgICAgICAgICB2YXIgc2VjdGlvbl9uYXZfbGlua3NfMl91cGRhdGVkID0gSlNPTi5wYXJzZShzZWN0aW9uX25hdl9saW5rc18yKTtcbiAgICAgICAgICAgIHNlY3Rpb25fbmF2X2xpbmtzXzJfdXBkYXRlZFtpbmRleF0ubGluayA9IG5ld1NlY3Rpb25OYXZMaW5rc0xpbmsyO1xuICAgICAgICAgICAgc2V0QXR0cmlidXRlcyggeyBzZWN0aW9uX25hdl9saW5rc18yOiBKU09OLnN0cmluZ2lmeShbLi4uc2VjdGlvbl9uYXZfbGlua3NfMl91cGRhdGVkXSkgfSApO1xuICAgICAgICB9O1xuXG4gICAgICAgIGNvbnN0IG9uQ2hhbmdlU2hvcnRjb2RlQXR0czEgPSBuZXdTaG9ydGNvZGVBdHRzMSA9PiB7XG4gICAgICAgICAgICBzZXRBdHRyaWJ1dGVzKCB7IHNob3J0Y29kZV9hdHRzXzE6IHsgLi4uc2hvcnRjb2RlX2F0dHNfMSwgLi4ubmV3U2hvcnRjb2RlQXR0czEgfSB9ICk7XG4gICAgICAgIH07XG5cbiAgICAgICAgY29uc3Qgb25DaGFuZ2VTaG9ydGNvZGVBdHRzMiA9IG5ld1Nob3J0Y29kZUF0dHMyID0+IHtcbiAgICAgICAgICAgIHNldEF0dHJpYnV0ZXMoIHsgc2hvcnRjb2RlX2F0dHNfMjogeyAuLi5zaG9ydGNvZGVfYXR0c18yLCAuLi5uZXdTaG9ydGNvZGVBdHRzMiB9IH0gKTtcbiAgICAgICAgfTtcblxuICAgICAgICBjb25zdCBvbkNoYW5nZUlkcyA9IG5ld0lkcz0+IHtcbiAgICAgICAgICAgIHNldEF0dHJpYnV0ZXMoIHsgZmVhdHVyZWRfbW92aWVfaWQ6IG5ld0lkcy5qb2luKCcsJykgfSApO1xuICAgICAgICB9O1xuXG4gICAgICAgIGNvbnN0IG9uQ2hhbmdlRGVzaWduT3B0aW9ucyA9IG5ld0Rlc2lnbk9wdGlvbnMgPT4ge1xuICAgICAgICAgICAgc2V0QXR0cmlidXRlcyggeyBkZXNpZ25fb3B0aW9uczogeyAuLi5kZXNpZ25fb3B0aW9ucywgLi4ubmV3RGVzaWduT3B0aW9ucyB9IH0gKTtcbiAgICAgICAgfTtcblxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPEZyYWdtZW50PlxuICAgICAgICAgICAgICAgIDxJbnNwZWN0b3JDb250cm9scz5cbiAgICAgICAgICAgICAgICA8UGFuZWxCb2R5XG4gICAgICAgICAgICAgICAgICAgIHRpdGxlPXtfXygnTW92aWVzIExpc3QnLCAndm9kaS1leHRlbnNpb25zJyl9XG4gICAgICAgICAgICAgICAgICAgIGluaXRpYWxPcGVuPXsgdHJ1ZSB9XG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICA8VGV4dENvbnRyb2xcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPXtfXygnU2VjdGlvbiBUaXRsZScsICd2b2RpLWV4dGVuc2lvbnMnKX1cbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXsgc2VjdGlvbl90aXRsZV8xIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsgb25DaGFuZ2VTZWN0aW9uVGl0bGUxIH1cbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgPFJlcGVhdGVyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aXRsZT17X18oJ05hdiBMaW5rcycsICd2b2RpLWV4dGVuc2lvbnMnKX1cbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlcz17IHNlY3Rpb25fbmF2X2xpbmtzXzEgPyBKU09OLnBhcnNlKHNlY3Rpb25fbmF2X2xpbmtzXzEpIDogW10gfVxuICAgICAgICAgICAgICAgICAgICAgICAgZGVmYXVsdFZhbHVlcz17IHsgdGl0bGU6ICcnLCBsaW5rOiAnJyB9IH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHVwZGF0ZVZhbHVlcz17IG9uQ2hhbmdlU2VjdGlvbk5hdkxpbmtzMSB9XG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0Q29udHJvbFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPXtfXygnQWN0aW9uIFRleHQnLCAndm9kaS1leHRlbnNpb25zJyl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT0ndGl0bGUnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWVrZXk9J3ZhbHVlJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPScnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJpZ2dlcl9tZXRob2RfbmFtZT0nb25DaGFuZ2UnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyBvbkNoYW5nZVNlY3Rpb25OYXZMaW5rc1RleHQxIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8VGV4dENvbnRyb2xcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD17X18oJ0FjdGlvbiBMaW5rJywgJ3ZvZGktZXh0ZW5zaW9ucycpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9J2xpbmsnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWVrZXk9J3ZhbHVlJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPScnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJpZ2dlcl9tZXRob2RfbmFtZT0nb25DaGFuZ2UnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyBvbkNoYW5nZVNlY3Rpb25OYXZMaW5rc0xpbmsxIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvUmVwZWF0ZXI+XG4gICAgICAgICAgICAgICAgICAgIDxQYW5lbEJvZHlcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlPXtfXygnTW92aWVzIExpc3QgQXR0cmlidXRlIDEnLCAndm9kaS1leHRlbnNpb25zJyl9XG4gICAgICAgICAgICAgICAgICAgICAgICBpbml0aWFsT3Blbj17IHRydWUgfVxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICA8U2hvcnRjb2RlQXR0c1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvc3RUeXBlID0gJ21vdmllJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhdFRheG9ub215ID0gJ21vdmllX2NhdCdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YWdUYXhvbm9teSA9ICdtb3ZpZV90YWcnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGlkZUZpZWxkcyA9IHsgWydjb2x1bW5zJ10gfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJpYnV0ZXMgPSB7IHsgLi4uc2hvcnRjb2RlX2F0dHNfMSB9IH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB1cGRhdGVTaG9ydGNvZGVBdHRzID0geyBvbkNoYW5nZVNob3J0Y29kZUF0dHMxIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvUGFuZWxCb2R5PlxuICAgICAgICAgICAgICAgIDwvUGFuZWxCb2R5PlxuICAgICAgICAgICAgICAgIDxQYW5lbEJvZHlcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU9e19fKCdGZWF0dXJlZCBNb3ZpZSB3aXRoIE1vdmllcyBMaXN0JywgJ3ZvZGktZXh0ZW5zaW9ucycpfVxuICAgICAgICAgICAgICAgICAgICBpbml0aWFsT3Blbj17IHRydWUgfVxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIDxUZXh0Q29udHJvbFxuICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9e19fKCdTZWN0aW9uIFRpdGxlJywgJ3ZvZGktZXh0ZW5zaW9ucycpfVxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9eyBzZWN0aW9uX3RpdGxlXzIgfVxuICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyBvbkNoYW5nZVNlY3Rpb25UaXRsZTIgfVxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICA8UmVwZWF0ZXJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlPXtfXygnTmF2IExpbmtzJywgJ3ZvZGktZXh0ZW5zaW9ucycpfVxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWVzPXsgc2VjdGlvbl9uYXZfbGlua3NfMiA/IEpTT04ucGFyc2Uoc2VjdGlvbl9uYXZfbGlua3NfMikgOiBbXSB9XG4gICAgICAgICAgICAgICAgICAgICAgICBkZWZhdWx0VmFsdWVzPXsgeyB0aXRsZTogJycsIGxpbms6ICcnIH0gfVxuICAgICAgICAgICAgICAgICAgICAgICAgdXBkYXRlVmFsdWVzPXsgb25DaGFuZ2VTZWN0aW9uTmF2TGlua3MyIH1cbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgPFRleHRDb250cm9sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9e19fKCdBY3Rpb24gVGV4dCcsICd2b2RpLWV4dGVuc2lvbnMnKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPSd0aXRsZSdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZWtleT0ndmFsdWUnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9JydcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cmlnZ2VyX21ldGhvZF9uYW1lPSdvbkNoYW5nZSdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17IG9uQ2hhbmdlU2VjdGlvbk5hdkxpbmtzVGV4dDIgfVxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0Q29udHJvbFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPXtfXygnQWN0aW9uIExpbmsnLCAndm9kaS1leHRlbnNpb25zJyl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT0nbGluaydcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZWtleT0ndmFsdWUnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9JydcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cmlnZ2VyX21ldGhvZF9uYW1lPSdvbkNoYW5nZSdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17IG9uQ2hhbmdlU2VjdGlvbk5hdkxpbmtzTGluazIgfVxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9SZXBlYXRlcj5cbiAgICAgICAgICAgICAgICAgICAgPFBvc3RTZWxlY3RvclxuICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9e19fKCdFbnRlciBGZWF0dXJlZCBNb3ZpZSBJZCcsICd2b2RpLWV4dGVuc2lvbnMnKX1cbiAgICAgICAgICAgICAgICAgICAgICAgIHBvc3RUeXBlID0gJ21vdmllJ1xuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0U2luZ2xlID0geyB0cnVlIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdGVkUG9zdElkcz17IGZlYXR1cmVkX21vdmllX2lkID8gZmVhdHVyZWRfbW92aWVfaWQuc3BsaXQoJywnKS5tYXAoTnVtYmVyKSA6IFtdIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHVwZGF0ZVNlbGVjdGVkUG9zdElkcz17IG9uQ2hhbmdlSWRzIH1cbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgPFBhbmVsQm9keVxuICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU9e19fKCdNb3ZpZXMgTGlzdCBBdHRyaWJ1dGUgMicsICd2b2RpLWV4dGVuc2lvbnMnKX1cbiAgICAgICAgICAgICAgICAgICAgICAgIGluaXRpYWxPcGVuPXsgdHJ1ZSB9XG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgPFNob3J0Y29kZUF0dHNcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvc3RUeXBlID0gJ21vdmllJ1xuICAgICAgICAgICAgICAgICAgICAgICAgY2F0VGF4b25vbXkgPSAnbW92aWVfY2F0J1xuICAgICAgICAgICAgICAgICAgICAgICAgdGFnVGF4b25vbXkgPSAnbW92aWVfdGFnJ1xuICAgICAgICAgICAgICAgICAgICAgICAgaGlkZUZpZWxkcyA9IHsgWydjb2x1bW5zJ10gfVxuICAgICAgICAgICAgICAgICAgICAgICAgYXR0cmlidXRlcyA9IHsgeyAuLi5zaG9ydGNvZGVfYXR0c18yIH0gfVxuICAgICAgICAgICAgICAgICAgICAgICAgdXBkYXRlU2hvcnRjb2RlQXR0cyA9IHsgb25DaGFuZ2VTaG9ydGNvZGVBdHRzMiB9XG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvUGFuZWxCb2R5PlxuICAgICAgICAgICAgICAgIDwvUGFuZWxCb2R5PlxuICAgICAgICAgICAgICAgIDxQYW5lbEJvZHlcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU9e19fKCdEZXNpZ24gT3B0aW9ucycsICd2b2RpLWV4dGVuc2lvbnMnKX1cbiAgICAgICAgICAgICAgICAgICAgaW5pdGlhbE9wZW49eyBmYWxzZSB9XG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICA8RGVzaWduT3B0aW9uc1xuICAgICAgICAgICAgICAgICAgICAgICAgYXR0cmlidXRlcyA9IHsgeyAuLi5kZXNpZ25fb3B0aW9ucyB9IH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHVwZGF0ZURlc2lnbk9wdGlvbnMgPSB7IG9uQ2hhbmdlRGVzaWduT3B0aW9ucyB9XG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPC9QYW5lbEJvZHk+XG4gICAgICAgICAgICAgICAgPC9JbnNwZWN0b3JDb250cm9scz5cbiAgICAgICAgICAgICAgICA8RGlzYWJsZWQ+XG4gICAgICAgICAgICAgICAgICAgIDxTZXJ2ZXJTaWRlUmVuZGVyXG4gICAgICAgICAgICAgICAgICAgICAgICBibG9jaz1cInZvZGkvbW92aWVzLWxpc3RcIlxuICAgICAgICAgICAgICAgICAgICAgICAgYXR0cmlidXRlcz17IGF0dHJpYnV0ZXMgfVxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDwvRGlzYWJsZWQ+XG4gICAgICAgICAgICA8L0ZyYWdtZW50PlxuICAgICAgICApO1xuICAgIH0gKSxcblxuICAgIHNhdmUoKSB7XG4gICAgICAgIC8vIFJlbmRlcmluZyBpbiBQSFBcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfSxcbn0gKTtcbiIsImNvbnN0IHsgX18gfSA9IHdwLmkxOG47XG5jb25zdCB7IENvbXBvbmVudCB9ID0gd3AuZWxlbWVudDtcbmNvbnN0IHsgUmFuZ2VDb250cm9sIH0gPSB3cC5jb21wb25lbnRzO1xuXG4vKipcbiAqIERlc2lnbk9wdGlvbnMgQ29tcG9uZW50XG4gKi9cbmV4cG9ydCBjbGFzcyBEZXNpZ25PcHRpb25zIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICAvKipcbiAgICAgKiBDb25zdHJ1Y3RvciBmb3IgRGVzaWduT3B0aW9ucyBDb21wb25lbnQuXG4gICAgICogU2V0cyB1cCBzdGF0ZSwgYW5kIGNyZWF0ZXMgYmluZGluZ3MgZm9yIGZ1bmN0aW9ucy5cbiAgICAgKiBAcGFyYW0gb2JqZWN0IHByb3BzIC0gY3VycmVudCBjb21wb25lbnQgcHJvcGVydGllcy5cbiAgICAgKi9cbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlciguLi5hcmd1bWVudHMpO1xuICAgICAgICB0aGlzLnByb3BzID0gcHJvcHM7XG5cbiAgICAgICAgdGhpcy5vbkNoYW5nZVBhZGRpbmdUb3AgPSB0aGlzLm9uQ2hhbmdlUGFkZGluZ1RvcC5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLm9uQ2hhbmdlUGFkZGluZ0JvdHRvbSA9IHRoaXMub25DaGFuZ2VQYWRkaW5nQm90dG9tLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMub25DaGFuZ2VQYWRkaW5nTGVmdCA9IHRoaXMub25DaGFuZ2VQYWRkaW5nTGVmdC5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLm9uQ2hhbmdlUGFkZGluZ1JpZ2h0ID0gdGhpcy5vbkNoYW5nZVBhZGRpbmdSaWdodC5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLm9uQ2hhbmdlTWFyZ2luVG9wID0gdGhpcy5vbkNoYW5nZU1hcmdpblRvcC5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLm9uQ2hhbmdlTWFyZ2luQm90dG9tID0gdGhpcy5vbkNoYW5nZU1hcmdpbkJvdHRvbS5iaW5kKHRoaXMpO1xuICAgIH1cblxuICAgIG9uQ2hhbmdlUGFkZGluZ1RvcCggbmV3b25DaGFuZ2VQYWRkaW5nVG9wICkge1xuICAgICAgICB0aGlzLnByb3BzLnVwZGF0ZURlc2lnbk9wdGlvbnMoe1xuICAgICAgICAgICAgcGFkZGluZ190b3A6IG5ld29uQ2hhbmdlUGFkZGluZ1RvcFxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBvbkNoYW5nZVBhZGRpbmdCb3R0b20oIG5ld29uQ2hhbmdlUGFkZGluZ0JvdHRvbSApIHtcbiAgICAgICAgdGhpcy5wcm9wcy51cGRhdGVEZXNpZ25PcHRpb25zKHtcbiAgICAgICAgICAgIHBhZGRpbmdfYm90dG9tOiBuZXdvbkNoYW5nZVBhZGRpbmdCb3R0b21cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgb25DaGFuZ2VQYWRkaW5nTGVmdCggbmV3b25DaGFuZ2VQYWRkaW5nTGVmdCApIHtcbiAgICAgICAgdGhpcy5wcm9wcy51cGRhdGVEZXNpZ25PcHRpb25zKHtcbiAgICAgICAgICAgIHBhZGRpbmdfbGVmdDogbmV3b25DaGFuZ2VQYWRkaW5nTGVmdFxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBvbkNoYW5nZVBhZGRpbmdSaWdodCggbmV3b25DaGFuZ2VQYWRkaW5nUmlnaHQgKSB7XG4gICAgICAgIHRoaXMucHJvcHMudXBkYXRlRGVzaWduT3B0aW9ucyh7XG4gICAgICAgICAgICBwYWRkaW5nX3JpZ2h0OiBuZXdvbkNoYW5nZVBhZGRpbmdSaWdodFxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBvbkNoYW5nZU1hcmdpblRvcCggbmV3b25DaGFuZ2VNYXJnaW5Ub3AgKSB7XG4gICAgICAgIHRoaXMucHJvcHMudXBkYXRlRGVzaWduT3B0aW9ucyh7XG4gICAgICAgICAgICBtYXJnaW5fdG9wOiBuZXdvbkNoYW5nZU1hcmdpblRvcFxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBvbkNoYW5nZU1hcmdpbkJvdHRvbSggbmV3b25DaGFuZ2VNYXJnaW5Cb3R0b20gKSB7XG4gICAgICAgIHRoaXMucHJvcHMudXBkYXRlRGVzaWduT3B0aW9ucyh7XG4gICAgICAgICAgICBtYXJnaW5fYm90dG9tOiBuZXdvbkNoYW5nZU1hcmdpbkJvdHRvbVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZW5kZXJzIHRoZSBEZXNpZ25PcHRpb25zIGNvbXBvbmVudC5cbiAgICAgKi9cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGNvbnN0IHsgYXR0cmlidXRlcyB9ID0gdGhpcy5wcm9wcztcbiAgICAgICAgY29uc3QgeyBwYWRkaW5nX3RvcCwgcGFkZGluZ19ib3R0b20sIHBhZGRpbmdfbGVmdCwgcGFkZGluZ19yaWdodCwgbWFyZ2luX3RvcCwgbWFyZ2luX2JvdHRvbSB9ID0gYXR0cmlidXRlcztcblxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8UmFuZ2VDb250cm9sXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsPXtfXygnUGFkZGluZyBUb3AgKHB4KScsICd2b2RpLWV4dGVuc2lvbnMnKX1cbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9eyBwYWRkaW5nX3RvcCB9XG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsgdGhpcy5vbkNoYW5nZVBhZGRpbmdUb3AgfVxuICAgICAgICAgICAgICAgICAgICBtaW49eyAwIH1cbiAgICAgICAgICAgICAgICAgICAgbWF4PXsgMTAwIH1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDxSYW5nZUNvbnRyb2xcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw9e19fKCdQYWRkaW5nIEJvdHRvbSAocHgpJywgJ3ZvZGktZXh0ZW5zaW9ucycpfVxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17IHBhZGRpbmdfYm90dG9tIH1cbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyB0aGlzLm9uQ2hhbmdlUGFkZGluZ0JvdHRvbSB9XG4gICAgICAgICAgICAgICAgICAgIG1pbj17IDAgfVxuICAgICAgICAgICAgICAgICAgICBtYXg9eyAxMDAgfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPFJhbmdlQ29udHJvbFxuICAgICAgICAgICAgICAgICAgICBsYWJlbD17X18oJ1BhZGRpbmcgTGVmdCAocHgpJywgJ3ZvZGktZXh0ZW5zaW9ucycpfVxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17IHBhZGRpbmdfbGVmdCB9XG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsgdGhpcy5vbkNoYW5nZVBhZGRpbmdMZWZ0IH1cbiAgICAgICAgICAgICAgICAgICAgbWluPXsgMCB9XG4gICAgICAgICAgICAgICAgICAgIG1heD17IDEwMCB9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8UmFuZ2VDb250cm9sXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsPXtfXygnUGFkZGluZyBSaWdodCAocHgpJywgJ3ZvZGktZXh0ZW5zaW9ucycpfVxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17IHBhZGRpbmdfcmlnaHQgfVxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17IHRoaXMub25DaGFuZ2VQYWRkaW5nUmlnaHQgfVxuICAgICAgICAgICAgICAgICAgICBtaW49eyAwIH1cbiAgICAgICAgICAgICAgICAgICAgbWF4PXsgMTAwIH1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDxSYW5nZUNvbnRyb2xcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw9e19fKCdNYXJnaW4gVG9wIChweCknLCAndm9kaS1leHRlbnNpb25zJyl9XG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXsgbWFyZ2luX3RvcCB9XG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsgdGhpcy5vbkNoYW5nZU1hcmdpblRvcCB9XG4gICAgICAgICAgICAgICAgICAgIG1pbj17IC0xMDAgfVxuICAgICAgICAgICAgICAgICAgICBtYXg9eyAxMDAgfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPFJhbmdlQ29udHJvbFxuICAgICAgICAgICAgICAgICAgICBsYWJlbD17X18oJ01hcmdpbiBCb3R0b20gKHB4KScsICd2b2RpLWV4dGVuc2lvbnMnKX1cbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9eyBtYXJnaW5fYm90dG9tIH1cbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyB0aGlzLm9uQ2hhbmdlTWFyZ2luQm90dG9tIH1cbiAgICAgICAgICAgICAgICAgICAgbWluPXsgLTEwMCB9XG4gICAgICAgICAgICAgICAgICAgIG1heD17IDEwMCB9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgIH1cbn0iLCJcbi8qKlxuICogSXRlbSBDb21wb25lbnQuXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IGl0ZW1UaXRsZSAtIEN1cnJlbnQgaXRlbSB0aXRsZS5cbiAqIEBwYXJhbSB7ZnVuY3Rpb259IGNsaWNrSGFuZGxlciAtIHRoaXMgaXMgdGhlIGhhbmRsaW5nIGZ1bmN0aW9uIGZvciB0aGUgYWRkL3JlbW92ZSBmdW5jdGlvblxuICogQHBhcmFtIHtJbnRlZ2VyfSBpdGVtSWQgLSBDdXJyZW50IGl0ZW0gSURcbiAqIEBwYXJhbSBpY29uXG4gKiBAcmV0dXJucyB7Kn0gSXRlbSBIVE1MLlxuICovXG5leHBvcnQgY29uc3QgSXRlbSA9ICh7IHRpdGxlOiB7IHJlbmRlcmVkOiBpdGVtVGl0bGUgfSA9IHt9LCBuYW1lLCBjbGlja0hhbmRsZXIsIGlkOiBpdGVtSWQsIGljb24gfSkgPT4gKFxuICAgIDxhcnRpY2xlIGNsYXNzTmFtZT1cIml0ZW1cIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpdGVtLWJvZHlcIj5cbiAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJpdGVtLXRpdGxlXCIgc3R5bGU9e3ttYXJnaW5Ub3A6ICcwJ319PntpdGVtVGl0bGV9e25hbWV9PC9oMz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gY2xpY2tIYW5kbGVyKGl0ZW1JZCl9PntpY29ufTwvYnV0dG9uPlxuICAgIDwvYXJ0aWNsZT5cbik7IiwiaW1wb3J0IHsgSXRlbSB9IGZyb20gJy4vSXRlbSc7XG5cbmNvbnN0IHsgX18gfSA9IHdwLmkxOG47XG5cbi8qKlxuICogSXRlbUxpc3QgQ29tcG9uZW50XG4gKiBAcGFyYW0gb2JqZWN0IHByb3BzIC0gQ29tcG9uZW50IHByb3BzLlxuICogQHJldHVybnMgeyp9XG4gKiBAY29uc3RydWN0b3JcbiAqL1xuZXhwb3J0IGNvbnN0IEl0ZW1MaXN0ID0gcHJvcHMgPT4ge1xuICAgIGNvbnN0IHsgZmlsdGVyZWQgPSBmYWxzZSwgbG9hZGluZyA9IGZhbHNlLCBpdGVtcyA9IFtdLCBhY3Rpb24gPSAoKSA9PiB7fSwgaWNvbiA9IG51bGwgfSA9IHByb3BzO1xuXG4gICAgaWYgKGxvYWRpbmcpIHtcbiAgICAgICAgcmV0dXJuIDxwIGNsYXNzTmFtZT1cImxvYWRpbmctaXRlbXNcIj57X18oJ0xvYWRpbmcgLi4uJywgJ3ZvZGktZXh0ZW5zaW9ucycpfTwvcD47XG4gICAgfVxuXG4gICAgaWYgKGZpbHRlcmVkICYmIGl0ZW1zLmxlbmd0aCA8IDEpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaXRlbS1saXN0XCI+XG4gICAgICAgICAgICAgICAgPHA+e19fKCdZb3VyIHF1ZXJ5IHlpZWxkZWQgbm8gcmVzdWx0cywgcGxlYXNlIHRyeSBhZ2Fpbi4nLCAndm9kaS1leHRlbnNpb25zJyl9PC9wPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgaWYgKCAhIGl0ZW1zIHx8IGl0ZW1zLmxlbmd0aCA8IDEgKSB7XG4gICAgICAgIHJldHVybiA8cCBjbGFzc05hbWU9XCJuby1pdGVtc1wiPntfXygnTm90IGZvdW5kLicsICd2b2RpLWV4dGVuc2lvbnMnKX08L3A+XG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpdGVtLWxpc3RcIj5cbiAgICAgICAgICAgIHtpdGVtcy5tYXAoKGl0ZW0pID0+IDxJdGVtIGtleT17aXRlbS5pZH0gey4uLml0ZW19IGNsaWNrSGFuZGxlcj17YWN0aW9ufSBpY29uPXtpY29ufSAvPil9XG4gICAgICAgIDwvZGl2PlxuICAgICk7XG59OyIsImltcG9ydCB7IEl0ZW1MaXN0IH0gZnJvbSAnLi9JdGVtTGlzdCc7XG5pbXBvcnQgKiBhcyBhcGkgZnJvbSAnLi4vdXRpbHMvYXBpJztcbmltcG9ydCB7IHVuaXF1ZUJ5SWQsIGRlYm91bmNlIH0gZnJvbSAnLi4vdXRpbHMvdXNlZnVsLWZ1bmNzJztcblxuY29uc3QgeyBfXyB9ID0gd3AuaTE4bjtcbmNvbnN0IHsgSWNvbiB9ID0gd3AuY29tcG9uZW50cztcbmNvbnN0IHsgQ29tcG9uZW50IH0gPSB3cC5lbGVtZW50O1xuXG4vKipcbiAqIFBvc3RTZWxlY3RvciBDb21wb25lbnRcbiAqL1xuZXhwb3J0IGNsYXNzIFBvc3RTZWxlY3RvciBleHRlbmRzIENvbXBvbmVudCB7XG4gICAgLyoqXG4gICAgICogQ29uc3RydWN0b3IgZm9yIFBvc3RTZWxlY3RvciBDb21wb25lbnQuXG4gICAgICogU2V0cyB1cCBzdGF0ZSwgYW5kIGNyZWF0ZXMgYmluZGluZ3MgZm9yIGZ1bmN0aW9ucy5cbiAgICAgKiBAcGFyYW0gb2JqZWN0IHByb3BzIC0gY3VycmVudCBjb21wb25lbnQgcHJvcGVydGllcy5cbiAgICAgKi9cbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlciguLi5hcmd1bWVudHMpO1xuICAgICAgICB0aGlzLnByb3BzID0gcHJvcHM7XG5cbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgICAgIHBvc3RzOiBbXSxcbiAgICAgICAgICAgIGxvYWRpbmc6IGZhbHNlLFxuICAgICAgICAgICAgdHlwZTogcHJvcHMucG9zdFR5cGUgfHwgJ3Bvc3QnLFxuICAgICAgICAgICAgdHlwZXM6IFtdLFxuICAgICAgICAgICAgZmlsdGVyOiAnJyxcbiAgICAgICAgICAgIGZpbHRlckxvYWRpbmc6IGZhbHNlLFxuICAgICAgICAgICAgZmlsdGVyUG9zdHM6IFtdLFxuICAgICAgICAgICAgaW5pdGlhbExvYWRpbmc6IGZhbHNlLFxuICAgICAgICAgICAgc2VsZWN0ZWRQb3N0czogW10sXG4gICAgICAgIH07XG5cbiAgICAgICAgdGhpcy5hZGRQb3N0ID0gdGhpcy5hZGRQb3N0LmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMucmVtb3ZlUG9zdCA9IHRoaXMucmVtb3ZlUG9zdC5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLmhhbmRsZUlucHV0RmlsdGVyQ2hhbmdlID0gdGhpcy5oYW5kbGVJbnB1dEZpbHRlckNoYW5nZS5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLmRvUG9zdEZpbHRlciA9IGRlYm91bmNlKHRoaXMuZG9Qb3N0RmlsdGVyLmJpbmQodGhpcyksIDMwMCk7XG4gICAgICAgIHRoaXMuZ2V0U2VsZWN0ZWRQb3N0SWRzID0gdGhpcy5nZXRTZWxlY3RlZFBvc3RJZHMuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5nZXRTZWxlY3RlZFBvc3RzID0gdGhpcy5nZXRTZWxlY3RlZFBvc3RzLmJpbmQodGhpcyk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogV2hlbiB0aGUgY29tcG9uZW50IG1vdW50cyBpdCBjYWxscyB0aGlzIGZ1bmN0aW9uLlxuICAgICAqIEZldGNoZXMgcG9zdHMgdHlwZXMsIHNlbGVjdGVkIHBvc3RzIHRoZW4gbWFrZXMgZmlyc3QgY2FsbCBmb3IgcG9zdHNcbiAgICAgKi9cbiAgICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICBpbml0aWFsTG9hZGluZzogdHJ1ZSxcbiAgICAgICAgfSk7XG5cbiAgICAgICAgYXBpLmdldFBvc3RUeXBlcygpXG4gICAgICAgICAgICAudGhlbigoIHJlc3BvbnNlICkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICAgICAgICB0eXBlczogcmVzcG9uc2VcbiAgICAgICAgICAgICAgICB9LCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucmV0cmlldmVTZWxlY3RlZFBvc3RzKClcbiAgICAgICAgICAgICAgICAgICAgICAgIC50aGVuKCggc2VsZWN0ZWRQb3N0cyApID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiggc2VsZWN0ZWRQb3N0cyApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbml0aWFsTG9hZGluZzogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RlZFBvc3RzOiBzZWxlY3RlZFBvc3RzLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGluaXRpYWxMb2FkaW5nOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEdldFBvc3RzIHdyYXBwZXIsIGJ1aWxkcyB0aGUgcmVxdWVzdCBhcmd1bWVudCBiYXNlZCBzdGF0ZSBhbmQgcGFyYW1ldGVycyBwYXNzZWQvXG4gICAgICogQHBhcmFtIHtvYmplY3R9IGFyZ3MgLSBkZXNpcmVkIGFyZ3VtZW50cyAoY2FuIGJlIGVtcHR5KS5cbiAgICAgKiBAcmV0dXJucyB7UHJvbWlzZTxUPn1cbiAgICAgKi9cbiAgICBnZXRQb3N0cyhhcmdzID0ge30pIHtcbiAgICAgICAgY29uc3QgcG9zdElkcyA9IHRoaXMuZ2V0U2VsZWN0ZWRQb3N0SWRzKCk7XG5cbiAgICAgICAgY29uc3QgZGVmYXVsdEFyZ3MgPSB7XG4gICAgICAgICAgICBwZXJfcGFnZTogMTAsXG4gICAgICAgICAgICB0eXBlOiB0aGlzLnN0YXRlLnR5cGUsXG4gICAgICAgICAgICBzZWFyY2g6IHRoaXMuc3RhdGUuZmlsdGVyLFxuICAgICAgICB9O1xuXG4gICAgICAgIGNvbnN0IHJlcXVlc3RBcmd1bWVudHMgPSB7XG4gICAgICAgICAgICAuLi5kZWZhdWx0QXJncyxcbiAgICAgICAgICAgIC4uLmFyZ3NcbiAgICAgICAgfTtcblxuICAgICAgICByZXF1ZXN0QXJndW1lbnRzLnJlc3RCYXNlID0gdGhpcy5zdGF0ZS50eXBlc1t0aGlzLnN0YXRlLnR5cGVdLnJlc3RfYmFzZTtcblxuICAgICAgICByZXR1cm4gYXBpLmdldFBvc3RzKHJlcXVlc3RBcmd1bWVudHMpXG4gICAgICAgICAgICAudGhlbihyZXNwb25zZSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKHJlcXVlc3RBcmd1bWVudHMuc2VhcmNoKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICAgICAgICAgICAgZmlsdGVyUG9zdHM6IHJlc3BvbnNlLmZpbHRlcigoeyBpZCB9KSA9PiBwb3N0SWRzLmluZGV4T2YoaWQpID09PSAtMSksXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiByZXNwb25zZTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICAgICAgcG9zdHM6IHVuaXF1ZUJ5SWQoWy4uLnRoaXMuc3RhdGUucG9zdHMsIC4uLnJlc3BvbnNlXSksXG4gICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICAvLyByZXR1cm4gcmVzcG9uc2UgdG8gY29udGludWUgdGhlIGNoYWluXG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlc3BvbnNlO1xuICAgICAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogR2V0cyB0aGUgc2VsZWN0ZWQgcG9zdHMgYnkgaWQgZnJvbSB0aGUgYHBvc3RzYCBzdGF0ZSBvYmplY3QgYW5kIHNvcnRzIHRoZW0gYnkgdGhlaXIgcG9zaXRpb24gaW4gdGhlIHNlbGVjdGVkIGFycmF5LlxuICAgICAqIEByZXR1cm5zIEFycmF5IG9mIG9iamVjdHMuXG4gICAgICovXG4gICAgZ2V0U2VsZWN0ZWRQb3N0SWRzKCkge1xuICAgICAgICBjb25zdCB7IHNlbGVjdGVkUG9zdElkcyB9ID0gdGhpcy5wcm9wcztcblxuICAgICAgICBpZiggc2VsZWN0ZWRQb3N0SWRzICkge1xuICAgICAgICAgICAgY29uc3QgcG9zdElkcyA9IEFycmF5LmlzQXJyYXkoIHNlbGVjdGVkUG9zdElkcyApID8gc2VsZWN0ZWRQb3N0SWRzIDogc2VsZWN0ZWRQb3N0SWRzLnNwbGl0KCcsJyk7XG4gICAgICAgICAgICByZXR1cm4gcG9zdElkcztcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBbXTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBHZXRzIHRoZSBzZWxlY3RlZCBwb3N0cyBieSBpZCBmcm9tIHRoZSBgcG9zdHNgIHN0YXRlIG9iamVjdCBhbmQgc29ydHMgdGhlbSBieSB0aGVpciBwb3NpdGlvbiBpbiB0aGUgc2VsZWN0ZWQgYXJyYXkuXG4gICAgICogQHJldHVybnMgQXJyYXkgb2Ygb2JqZWN0cy5cbiAgICAgKi9cbiAgICBnZXRTZWxlY3RlZFBvc3RzKCBwb3N0SWRzICkge1xuICAgICAgICAvLyBjb25zdCBmaWx0ZXJQb3N0c0xpc3QgPSB0aGlzLnN0YXRlLmZpbHRlcmluZyAmJiAhdGhpcy5zdGF0ZS5maWx0ZXJMb2FkaW5nID8gdGhpcy5zdGF0ZS5maWx0ZXJQb3N0cyA6IFtdO1xuICAgICAgICBjb25zdCBwb3N0TGlzdCA9IHVuaXF1ZUJ5SWQoW1xuICAgICAgICAgICAgLi4udGhpcy5zdGF0ZS5maWx0ZXJQb3N0cyxcbiAgICAgICAgICAgIC4uLnRoaXMuc3RhdGUucG9zdHNcbiAgICAgICAgXSk7XG4gICAgICAgIGNvbnN0IHNlbGVjdGVkUG9zdHMgPSBwb3N0TGlzdFxuICAgICAgICAgICAgLmZpbHRlcigoeyBpZCB9KSA9PiBwb3N0SWRzLmluZGV4T2YoaWQpICE9PSAtMSlcbiAgICAgICAgICAgIC5zb3J0KChhLCBiKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgYUluZGV4ID0gcG9zdElkcy5pbmRleE9mKGEuaWQpO1xuICAgICAgICAgICAgICAgIGNvbnN0IGJJbmRleCA9IHBvc3RJZHMuaW5kZXhPZihiLmlkKTtcblxuICAgICAgICAgICAgICAgIGlmIChhSW5kZXggPiBiSW5kZXgpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDE7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaWYgKGFJbmRleCA8IGJJbmRleCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gLTE7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgcmV0dXJuIDA7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIHNlbGVjdGVkUG9zdHM6IHNlbGVjdGVkUG9zdHMsXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIE1ha2VzIHRoZSBuZWNlc3NhcnkgYXBpIGNhbGxzIHRvIGZldGNoIHRoZSBzZWxlY3RlZCBwb3N0cyBhbmQgcmV0dXJucyBhIHByb21pc2UuXG4gICAgICogQHJldHVybnMgeyp9XG4gICAgICovXG4gICAgcmV0cmlldmVTZWxlY3RlZFBvc3RzKCkge1xuICAgICAgICBjb25zdCB7IHBvc3RUeXBlLCBzZWxlY3RlZFBvc3RJZHMgfSA9IHRoaXMucHJvcHM7XG4gICAgICAgIGNvbnN0IHsgdHlwZXMgfSA9IHRoaXMuc3RhdGU7XG5cbiAgICAgICAgY29uc3QgcG9zdElkcyA9IHRoaXMuZ2V0U2VsZWN0ZWRQb3N0SWRzKCkuam9pbignLCcpO1xuXG4gICAgICAgIGlmICggISBwb3N0SWRzICkge1xuICAgICAgICAgICAgLy8gcmV0dXJuIGEgZmFrZSBwcm9taXNlIHRoYXQgYXV0byByZXNvbHZlcy5cbiAgICAgICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4gcmVzb2x2ZSgpKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCBwb3N0X2FyZ3MgPSB7XG4gICAgICAgICAgICBpbmNsdWRlOiBwb3N0SWRzLFxuICAgICAgICAgICAgcGVyX3BhZ2U6IDEwMCxcbiAgICAgICAgICAgIHBvc3RUeXBlXG4gICAgICAgIH07XG5cbiAgICAgICAgaWYoIHRoaXMucHJvcHMucG9zdFN0YXR1cyApIHtcbiAgICAgICAgICAgIHBvc3RfYXJncy5zdGF0dXMgPSB0aGlzLnByb3BzLnBvc3RTdGF0dXM7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdGhpcy5nZXRQb3N0cyh7XG4gICAgICAgICAgICAuLi5wb3N0X2FyZ3NcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQWRkcyBkZXNpcmVkIHBvc3QgaWQgdG8gdGhlIHNlbGVjdGVkUG9zdElkcyBMaXN0XG4gICAgICogQHBhcmFtIHtJbnRlZ2VyfSBwb3N0X2lkXG4gICAgICovXG4gICAgYWRkUG9zdChwb3N0X2lkKSB7XG4gICAgICAgIGlmICh0aGlzLnN0YXRlLmZpbHRlcikge1xuICAgICAgICAgICAgY29uc3QgcG9zdCA9IHRoaXMuc3RhdGUuZmlsdGVyUG9zdHMuZmlsdGVyKHAgPT4gcC5pZCA9PT0gcG9zdF9pZCk7XG4gICAgICAgICAgICBjb25zdCBwb3N0cyA9IHVuaXF1ZUJ5SWQoW1xuICAgICAgICAgICAgICAgIC4uLnRoaXMuc3RhdGUucG9zdHMsXG4gICAgICAgICAgICAgICAgLi4ucG9zdFxuICAgICAgICAgICAgXSk7XG5cbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICAgIHBvc3RzXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmKCB0aGlzLnByb3BzLnNlbGVjdFNpbmdsZSApIHtcbiAgICAgICAgICAgIGNvbnN0IHNlbGVjdGVkUG9zdElkcyA9IFsgcG9zdF9pZCBdO1xuICAgICAgICAgICAgdGhpcy5wcm9wcy51cGRhdGVTZWxlY3RlZFBvc3RJZHMoIHNlbGVjdGVkUG9zdElkcyApO1xuICAgICAgICAgICAgdGhpcy5nZXRTZWxlY3RlZFBvc3RzKCBzZWxlY3RlZFBvc3RJZHMgKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNvbnN0IHBvc3RJZHMgPSB0aGlzLmdldFNlbGVjdGVkUG9zdElkcygpO1xuICAgICAgICAgICAgY29uc3Qgc2VsZWN0ZWRQb3N0SWRzID0gWyAuLi5wb3N0SWRzLCBwb3N0X2lkIF07XG4gICAgICAgICAgICB0aGlzLnByb3BzLnVwZGF0ZVNlbGVjdGVkUG9zdElkcyggc2VsZWN0ZWRQb3N0SWRzICk7XG4gICAgICAgICAgICB0aGlzLmdldFNlbGVjdGVkUG9zdHMoIHNlbGVjdGVkUG9zdElkcyApO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmVtb3ZlcyBkZXNpcmVkIHBvc3QgaWQgdG8gdGhlIHNlbGVjdGVkUG9zdElkcyBMaXN0XG4gICAgICogQHBhcmFtIHtJbnRlZ2VyfSBwb3N0X2lkXG4gICAgICovXG4gICAgcmVtb3ZlUG9zdChwb3N0X2lkKSB7XG4gICAgICAgIGNvbnN0IHBvc3RJZHMgPSB0aGlzLmdldFNlbGVjdGVkUG9zdElkcygpO1xuICAgICAgICBjb25zdCBzZWxlY3RlZFBvc3RJZHMgPSBbIC4uLnBvc3RJZHMgXS5maWx0ZXIoaWQgPT4gaWQgIT09IHBvc3RfaWQpO1xuICAgICAgICB0aGlzLnByb3BzLnVwZGF0ZVNlbGVjdGVkUG9zdElkcyggc2VsZWN0ZWRQb3N0SWRzICk7XG4gICAgICAgIHRoaXMuZ2V0U2VsZWN0ZWRQb3N0cyggc2VsZWN0ZWRQb3N0SWRzICk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogSGFuZGxlcyB0aGUgc2VhcmNoIGJveCBpbnB1dCB2YWx1ZVxuICAgICAqIEBwYXJhbSBzdHJpbmcgdHlwZSAtIGNvbWVzIGZyb20gdGhlIGV2ZW50IG9iamVjdCB0YXJnZXQuXG4gICAgICovXG4gICAgaGFuZGxlSW5wdXRGaWx0ZXJDaGFuZ2UoeyB0YXJnZXQ6IHsgdmFsdWU6ZmlsdGVyID0gJycgfSA9IHt9IH0gPSB7fSkge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIGZpbHRlclxuICAgICAgICB9LCAoKSA9PiB7XG4gICAgICAgICAgICBpZiAoIWZpbHRlcikge1xuICAgICAgICAgICAgICAgIC8vIHJlbW92ZSBmaWx0ZXJlZCBwb3N0c1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnNldFN0YXRlKHsgZmlsdGVyZWRQb3N0czogW10sIGZpbHRlcmluZzogZmFsc2UgfSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHRoaXMuZG9Qb3N0RmlsdGVyKCk7XG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQWN0dWFsIGFwaSBjYWxsIGZvciBzZWFyY2hpbmcgZm9yIHF1ZXJ5LCB0aGlzIGZ1bmN0aW9uIGlzIGRlYm91bmNlZCBpbiBjb25zdHJ1Y3Rvci5cbiAgICAgKi9cbiAgICBkb1Bvc3RGaWx0ZXIoKSB7XG4gICAgICAgIGNvbnN0IHsgZmlsdGVyID0gJycgfSA9IHRoaXMuc3RhdGU7XG5cbiAgICAgICAgaWYgKCFmaWx0ZXIpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgZmlsdGVyaW5nOiB0cnVlLFxuICAgICAgICAgICAgZmlsdGVyTG9hZGluZzogdHJ1ZVxuICAgICAgICB9KTtcblxuICAgICAgICBsZXQgcG9zdF9hcmdzID0ge307XG5cbiAgICAgICAgaWYoIHRoaXMucHJvcHMucG9zdFN0YXR1cyApIHtcbiAgICAgICAgICAgIHBvc3RfYXJncy5zdGF0dXMgPSB0aGlzLnByb3BzLnBvc3RTdGF0dXM7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmdldFBvc3RzKHtcbiAgICAgICAgICAgIC4uLnBvc3RfYXJnc1xuICAgICAgICB9KS50aGVuKCgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICAgIGZpbHRlckxvYWRpbmc6IGZhbHNlXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmVuZGVycyB0aGUgUG9zdFNlbGVjdG9yIGNvbXBvbmVudC5cbiAgICAgKi9cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGNvbnN0IHBvc3RMaXN0ID0gdGhpcy5zdGF0ZS5maWx0ZXJpbmcgJiYgIXRoaXMuc3RhdGUuZmlsdGVyTG9hZGluZyA/IHRoaXMuc3RhdGUuZmlsdGVyUG9zdHMgOiBbXTtcblxuICAgICAgICBjb25zdCBhZGRJY29uID0gPEljb24gaWNvbj1cInBsdXNcIiAvPjtcbiAgICAgICAgY29uc3QgcmVtb3ZlSWNvbiA9IDxJY29uIGljb249XCJtaW51c1wiIC8+O1xuXG4gICAgICAgIGNvbnN0IHNlYXJjaGlucHV0dW5pcXVlSWQgPSAnc2VhcmNoaW5wdXQtJyArIE1hdGgucmFuZG9tKCkudG9TdHJpbmcoMzYpLnN1YnN0cigyLCAxNik7XG5cbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29tcG9uZW50cy1iYXNlLWNvbnRyb2wgY29tcG9uZW50cy1wb3N0LXNlbGVjdG9yXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb21wb25lbnRzLWJhc2UtY29udHJvbF9fZmllbGQtLXNlbGVjdGVkXCI+XG4gICAgICAgICAgICAgICAgICAgIDxoMj57X18oJ1NlYXJjaCBQb3N0JywgJ3ZvZGktZXh0ZW5zaW9ucycpfTwvaDI+XG4gICAgICAgICAgICAgICAgICAgIDxJdGVtTGlzdFxuICAgICAgICAgICAgICAgICAgICAgICAgaXRlbXM9eyBbLi4udGhpcy5zdGF0ZS5zZWxlY3RlZFBvc3RzXSB9XG4gICAgICAgICAgICAgICAgICAgICAgICBsb2FkaW5nPXt0aGlzLnN0YXRlLmluaXRpYWxMb2FkaW5nfVxuICAgICAgICAgICAgICAgICAgICAgICAgYWN0aW9uPXt0aGlzLnJlbW92ZVBvc3R9XG4gICAgICAgICAgICAgICAgICAgICAgICBpY29uPXtyZW1vdmVJY29ufVxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29tcG9uZW50cy1iYXNlLWNvbnRyb2xfX2ZpZWxkXCI+XG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPXtzZWFyY2hpbnB1dHVuaXF1ZUlkfSBjbGFzc05hbWU9XCJjb21wb25lbnRzLWJhc2UtY29udHJvbF9fbGFiZWxcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxJY29uIGljb249XCJzZWFyY2hcIiAvPlxuICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImNvbXBvbmVudHMtdGV4dC1jb250cm9sX19pbnB1dFwiXG4gICAgICAgICAgICAgICAgICAgICAgICBpZD17c2VhcmNoaW5wdXR1bmlxdWVJZH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJzZWFyY2hcIlxuICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9e19fKCdQbGVhc2UgZW50ZXIgeW91ciBzZWFyY2ggcXVlcnkuLi4nLCAndm9kaS1leHRlbnNpb25zJyl9XG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5maWx0ZXJ9XG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVJbnB1dEZpbHRlckNoYW5nZX1cbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgPEl0ZW1MaXN0XG4gICAgICAgICAgICAgICAgICAgICAgICBpdGVtcz17cG9zdExpc3R9XG4gICAgICAgICAgICAgICAgICAgICAgICBsb2FkaW5nPXt0aGlzLnN0YXRlLmluaXRpYWxMb2FkaW5nfHx0aGlzLnN0YXRlLmxvYWRpbmd8fHRoaXMuc3RhdGUuZmlsdGVyTG9hZGluZ31cbiAgICAgICAgICAgICAgICAgICAgICAgIGZpbHRlcmVkPXt0aGlzLnN0YXRlLmZpbHRlcmluZ31cbiAgICAgICAgICAgICAgICAgICAgICAgIGFjdGlvbj17dGhpcy5hZGRQb3N0fVxuICAgICAgICAgICAgICAgICAgICAgICAgaWNvbj17YWRkSWNvbn1cbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgIH1cbn0iLCJjb25zdCB7IF9fIH0gPSB3cC5pMThuO1xuY29uc3QgeyBDb21wb25lbnQsIENoaWxkcmVuIH0gPSB3cC5lbGVtZW50O1xuY29uc3QgeyBQYW5lbCwgQnV0dG9uLCBJY29uIH0gPSB3cC5jb21wb25lbnRzO1xuXG4vKipcbiAqIFJlcGVhdGVyIENvbXBvbmVudFxuICovXG5leHBvcnQgY2xhc3MgUmVwZWF0ZXIgZXh0ZW5kcyBDb21wb25lbnQge1xuICAgIC8qKlxuICAgICAqIENvbnN0cnVjdG9yIGZvciBSZXBlYXRlciBDb21wb25lbnQuXG4gICAgICogU2V0cyB1cCBzdGF0ZSwgYW5kIGNyZWF0ZXMgYmluZGluZ3MgZm9yIGZ1bmN0aW9ucy5cbiAgICAgKiBAcGFyYW0gb2JqZWN0IHByb3BzIC0gY3VycmVudCBjb21wb25lbnQgcHJvcGVydGllcy5cbiAgICAgKi9cbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlciguLi5hcmd1bWVudHMpO1xuICAgICAgICB0aGlzLnByb3BzID0gcHJvcHM7XG5cbiAgICAgICAgdGhpcy5yZW5kZXJBZGRCdXR0b24gPSB0aGlzLnJlbmRlckFkZEJ1dHRvbi5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLnJlbmRlclJlbW92ZUJ1dHRvbiA9IHRoaXMucmVuZGVyUmVtb3ZlQnV0dG9uLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMuaGFuZGxlQWRkID0gdGhpcy5oYW5kbGVBZGQuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5oYW5kbGVSZW1vdmUgPSB0aGlzLmhhbmRsZVJlbW92ZS5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLnJlbmRlckNoaWxkcmVuRWxlbWVudHMgPSB0aGlzLnJlbmRlckNoaWxkcmVuRWxlbWVudHMuYmluZCh0aGlzKTtcbiAgICB9XG5cbiAgICByZW5kZXJBZGRCdXR0b24oKSB7XG4gICAgICAgIHJldHVybihcbiAgICAgICAgICAgIDxCdXR0b24gaXNEZWZhdWx0IGNsYXNzTmFtZT1cImJ1dHRvbi1mdWxsd2lkdGhcIiBvbkNsaWNrPXt0aGlzLmhhbmRsZUFkZH0+XG4gICAgICAgICAgICAgICAgPEljb24gaWNvbj1cInBsdXNcIiAvPlxuICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgcmVuZGVyUmVtb3ZlQnV0dG9uKCkge1xuICAgICAgICByZXR1cm4oXG4gICAgICAgICAgICA8QnV0dG9uIGlzRGVzdHJ1Y3RpdmUgY2xhc3NOYW1lPVwiYnV0dG9uLXJlbW92ZVwiIG9uQ2xpY2s9e3RoaXMuaGFuZGxlUmVtb3ZlfT5cbiAgICAgICAgICAgICAgICA8SWNvbiBpY29uPVwiZGlzbWlzc1wiIC8+XG4gICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICBoYW5kbGVBZGQoKSB7XG4gICAgICAgIGNvbnN0IHsgZGVmYXVsdFZhbHVlcywgdXBkYXRlVmFsdWVzIH0gPSB0aGlzLnByb3BzO1xuICAgICAgICBjb25zdCB7IHZhbHVlcyB9ID0gdGhpcy5wcm9wcztcbiAgICAgICAgY29uc3QgY3VycmVudF92YWx1ZXMgPSB2YWx1ZXMgPyBbIC4uLnZhbHVlcywgeyAuLi5kZWZhdWx0VmFsdWVzIH0gXSA6IFsgeyAuLi5kZWZhdWx0VmFsdWVzIH0gXTtcbiAgICAgICAgdXBkYXRlVmFsdWVzKCBjdXJyZW50X3ZhbHVlcyApO1xuICAgIH1cblxuICAgIGhhbmRsZVJlbW92ZSggaW5kZXggKSB7XG4gICAgICAgIGNvbnN0IHsgdXBkYXRlVmFsdWVzIH0gPSB0aGlzLnByb3BzO1xuICAgICAgICBjb25zdCB7IHZhbHVlcyB9ID0gdGhpcy5wcm9wcztcbiAgICAgICAgY29uc3QgY3VycmVudF92YWx1ZXMgPSB2YWx1ZXMuZmlsdGVyKCAoIHZhbHVlLCBpICkgPT4gaSAhPSBpbmRleCApO1xuICAgICAgICB1cGRhdGVWYWx1ZXMoIGN1cnJlbnRfdmFsdWVzICk7XG4gICAgfVxuXG4gICAgcmVuZGVyQ2hpbGRyZW5FbGVtZW50cygpIHtcbiAgICAgICAgY29uc3QgeyBjaGlsZHJlbiB9ID0gdGhpcy5wcm9wcztcbiAgICAgICAgY29uc3QgeyB2YWx1ZXMgfSA9IHRoaXMucHJvcHM7XG5cbiAgICAgICAgaWYoICEgdmFsdWVzICkge1xuICAgICAgICAgICAgcmV0dXJuIFtdO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgcmVtb3ZlX2J1dHRvbiA9IHRoaXMucmVuZGVyUmVtb3ZlQnV0dG9uKCk7XG5cbiAgICAgICAgcmV0dXJuIHZhbHVlcy5tYXAoICggdmFsdWUsIGluZGV4ICkgPT4ge1xuICAgICAgICAgICAgY29uc3QgdXBkYXRlZF9jaGlsZHJlbiA9IENoaWxkcmVuLm1hcChjaGlsZHJlbiwgKCBjaGlsZCApID0+IHtcbiAgICAgICAgICAgICAgICBsZXQgY2hpbGRfcHJvcHMgPSB7IC4uLmNoaWxkLnByb3BzIH07XG4gICAgICAgICAgICAgICAgaWYoIHZhbHVlc1tpbmRleF1bY2hpbGQucHJvcHMubmFtZV0gKSB7XG4gICAgICAgICAgICAgICAgICAgIGNoaWxkX3Byb3BzW2NoaWxkLnByb3BzLnZhbHVla2V5XSA9IHZhbHVlc1tpbmRleF1bY2hpbGQucHJvcHMubmFtZV07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNoaWxkX3Byb3BzW2NoaWxkLnByb3BzLnRyaWdnZXJfbWV0aG9kX25hbWVdID0gKHZhbHVlKSA9PiBjaGlsZC5wcm9wc1tjaGlsZC5wcm9wcy50cmlnZ2VyX21ldGhvZF9uYW1lXSh2YWx1ZSwgaW5kZXgpO1xuICAgICAgICAgICAgICAgIHJldHVybiBSZWFjdC5jbG9uZUVsZW1lbnQoIGNoaWxkLCB7IC4uLmNoaWxkX3Byb3BzIH0gKTtcbiAgICAgICAgICAgIH0gKTtcblxuICAgICAgICAgICAgY29uc3QgdXBkYXRlZF9yZW1vdmVfYnV0dG9uID0gUmVhY3QuY2xvbmVFbGVtZW50KCByZW1vdmVfYnV0dG9uLCB7IGtleTogJ3JlcGVhdGVyLXJlbW92ZS0nK2luZGV4LCBvbkNsaWNrOiAoKSA9PiByZW1vdmVfYnV0dG9uLnByb3BzWydvbkNsaWNrJ10oaW5kZXgpIH0gKTtcblxuICAgICAgICAgICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoIFBhbmVsLCB7IGtleTogJ3JlcGVhdGVyLWNoaWxkLScraW5kZXggfSwgW3VwZGF0ZWRfY2hpbGRyZW4sIHVwZGF0ZWRfcmVtb3ZlX2J1dHRvbl0pO1xuICAgICAgICB9ICk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmVuZGVycyB0aGUgUmVwZWF0ZXIgY29tcG9uZW50LlxuICAgICAqL1xuICAgIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29tcG9uZW50cy1iYXNlLWNvbnRyb2wgcmVwZWF0ZXItY29tcG9uZW50XCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb21wb25lbnRzLWJhc2UtY29udHJvbF9fZmllbGRcIj5cbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImNvbXBvbmVudHMtYmFzZS1jb250cm9sX19sYWJlbFwiPnt0aGlzLnByb3BzLnRpdGxlfTwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgIHt0aGlzLnJlbmRlckNoaWxkcmVuRWxlbWVudHMoKX1cbiAgICAgICAgICAgICAgICAgICAge3RoaXMucmVuZGVyQWRkQnV0dG9uKCl9XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICB9XG59IiwiaW1wb3J0IHsgUG9zdFNlbGVjdG9yIH0gZnJvbSAnLi9Qb3N0U2VsZWN0b3InO1xuaW1wb3J0IHsgVGVybVNlbGVjdG9yIH0gZnJvbSAnLi9UZXJtU2VsZWN0b3InO1xuXG5jb25zdCB7IF9fIH0gPSB3cC5pMThuO1xuY29uc3QgeyBDb21wb25lbnQgfSA9IHdwLmVsZW1lbnQ7XG5jb25zdCB7IFJhbmdlQ29udHJvbCwgU2VsZWN0Q29udHJvbCwgQ2hlY2tib3hDb250cm9sIH0gPSB3cC5jb21wb25lbnRzO1xuY29uc3QgeyBhcHBseUZpbHRlcnMgfSA9IHdwLmhvb2tzO1xuXG4vKipcbiAqIFNob3J0Y29kZUF0dHMgQ29tcG9uZW50XG4gKi9cbmV4cG9ydCBjbGFzcyBTaG9ydGNvZGVBdHRzIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICAvKipcbiAgICAgKiBDb25zdHJ1Y3RvciBmb3IgU2hvcnRjb2RlQXR0cyBDb21wb25lbnQuXG4gICAgICogU2V0cyB1cCBzdGF0ZSwgYW5kIGNyZWF0ZXMgYmluZGluZ3MgZm9yIGZ1bmN0aW9ucy5cbiAgICAgKiBAcGFyYW0gb2JqZWN0IHByb3BzIC0gY3VycmVudCBjb21wb25lbnQgcHJvcGVydGllcy5cbiAgICAgKi9cbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlciguLi5hcmd1bWVudHMpO1xuICAgICAgICB0aGlzLnByb3BzID0gcHJvcHM7XG5cbiAgICAgICAgdGhpcy5vbkNoYW5nZUxpbWl0ID0gdGhpcy5vbkNoYW5nZUxpbWl0LmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMub25DaGFuZ2VDb2x1bW5zID0gdGhpcy5vbkNoYW5nZUNvbHVtbnMuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5vbkNoYW5nZU9yZGVyYnkgPSB0aGlzLm9uQ2hhbmdlT3JkZXJieS5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLm9uQ2hhbmdlT3JkZXIgPSB0aGlzLm9uQ2hhbmdlT3JkZXIuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5vbkNoYW5nZUlkcyA9IHRoaXMub25DaGFuZ2VJZHMuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5vbkNoYW5nZUNhdGVnb3J5ID0gdGhpcy5vbkNoYW5nZUNhdGVnb3J5LmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMub25DaGFuZ2VHZW5yZSA9IHRoaXMub25DaGFuZ2VHZW5yZS5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLm9uQ2hhbmdlVGFnID0gdGhpcy5vbkNoYW5nZVRhZy5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLm9uQ2hhbmdlRmVhdHVyZWQgPSB0aGlzLm9uQ2hhbmdlRmVhdHVyZWQuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5vbkNoYW5nZVRvcFJhdGVkID0gdGhpcy5vbkNoYW5nZVRvcFJhdGVkLmJpbmQodGhpcyk7XG4gICAgfVxuXG4gICAgb25DaGFuZ2VMaW1pdCggbmV3TGltaXQgKSB7XG4gICAgICAgIHRoaXMucHJvcHMudXBkYXRlU2hvcnRjb2RlQXR0cyh7XG4gICAgICAgICAgICBsaW1pdDogbmV3TGltaXRcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgb25DaGFuZ2VDb2x1bW5zKCBuZXdDb2x1bW5zICkge1xuICAgICAgICB0aGlzLnByb3BzLnVwZGF0ZVNob3J0Y29kZUF0dHMoe1xuICAgICAgICAgICAgY29sdW1uczogbmV3Q29sdW1uc1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBvbkNoYW5nZU9yZGVyYnkoIG5ld09yZGVyYnkgKSB7XG4gICAgICAgIHRoaXMucHJvcHMudXBkYXRlU2hvcnRjb2RlQXR0cyh7XG4gICAgICAgICAgICBvcmRlcmJ5OiBuZXdPcmRlcmJ5XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIG9uQ2hhbmdlT3JkZXIoIG5ld09yZGVyICkge1xuICAgICAgICB0aGlzLnByb3BzLnVwZGF0ZVNob3J0Y29kZUF0dHMoe1xuICAgICAgICAgICAgb3JkZXI6IG5ld09yZGVyXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIG9uQ2hhbmdlSWRzKCBuZXdJZHMgKSB7XG4gICAgICAgIHRoaXMucHJvcHMudXBkYXRlU2hvcnRjb2RlQXR0cyh7XG4gICAgICAgICAgICBpZHM6IG5ld0lkcy5qb2luKCcsJylcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgb25DaGFuZ2VDYXRlZ29yeSggbmV3Q2F0ZWdvcnkgKSB7XG4gICAgICAgIHRoaXMucHJvcHMudXBkYXRlU2hvcnRjb2RlQXR0cyh7XG4gICAgICAgICAgICBjYXRlZ29yeTogbmV3Q2F0ZWdvcnkuam9pbignLCcpXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIG9uQ2hhbmdlR2VucmUoIG5ld0dlbnJlICkge1xuICAgICAgICB0aGlzLnByb3BzLnVwZGF0ZVNob3J0Y29kZUF0dHMoe1xuICAgICAgICAgICAgZ2VucmU6IG5ld0dlbnJlLmpvaW4oJywnKVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBvbkNoYW5nZVRhZyggbmV3VGFnICkge1xuICAgICAgICB0aGlzLnByb3BzLnVwZGF0ZVNob3J0Y29kZUF0dHMoe1xuICAgICAgICAgICAgdGFnOiBuZXdUYWcuam9pbignLCcpXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIG9uQ2hhbmdlRmVhdHVyZWQoIG5ld0ZlYXR1cmVkICkge1xuICAgICAgICB0aGlzLnByb3BzLnVwZGF0ZVNob3J0Y29kZUF0dHMoe1xuICAgICAgICAgICAgZmVhdHVyZWQ6IG5ld0ZlYXR1cmVkXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIG9uQ2hhbmdlVG9wUmF0ZWQoIG5ld1RvcFJhdGVkICkge1xuICAgICAgICB0aGlzLnByb3BzLnVwZGF0ZVNob3J0Y29kZUF0dHMoe1xuICAgICAgICAgICAgdG9wX3JhdGVkOiBuZXdUb3BSYXRlZFxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZW5kZXJzIHRoZSBTaG9ydGNvZGVBdHRzIGNvbXBvbmVudC5cbiAgICAgKi9cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGNvbnN0IHsgYXR0cmlidXRlcywgcG9zdFR5cGUsIHBvc3RTdGF0dXMsIGNhdFRheG9ub215LCB0YWdUYXhvbm9teSwgbWluTGltaXQgPSAxLCBtYXhMaW1pdCA9IDIwLCBtaW5Db2x1bW5zID0gMSwgbWF4Q29sdW1ucyA9IDYsIGhpZGVGaWVsZHMgfSA9IHRoaXMucHJvcHM7XG4gICAgICAgIGNvbnN0IHsgbGltaXQsIGNvbHVtbnMsIG9yZGVyYnksIG9yZGVyLCBpZHMsIGNhdGVnb3J5LCBnZW5yZSwgdGFnLCBmZWF0dXJlZCwgdG9wX3JhdGVkIH0gPSBhdHRyaWJ1dGVzO1xuXG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIHsgISggaGlkZUZpZWxkcyAmJiBoaWRlRmllbGRzLmluY2x1ZGVzKCdsaW1pdCcpICkgPyAoXG4gICAgICAgICAgICAgICAgPFJhbmdlQ29udHJvbFxuICAgICAgICAgICAgICAgICAgICBsYWJlbD17X18oJ0xpbWl0JywgJ3ZvZGktZXh0ZW5zaW9ucycpfVxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17IGxpbWl0IH1cbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyB0aGlzLm9uQ2hhbmdlTGltaXQgfVxuICAgICAgICAgICAgICAgICAgICBtaW49eyBhcHBseUZpbHRlcnMoICd2b2RpLmNvbXBvbmVudC5zaG9ydGNvZGVBdHRzLmxpbWl0Lm1pbicsIG1pbkxpbWl0ICkgfVxuICAgICAgICAgICAgICAgICAgICBtYXg9eyBhcHBseUZpbHRlcnMoICd2b2RpLmNvbXBvbmVudC5zaG9ydGNvZGVBdHRzLmxpbWl0Lm1heCcsIG1heExpbWl0ICkgfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgKSA6ICcnIH1cbiAgICAgICAgICAgICAgICB7ICEoIGhpZGVGaWVsZHMgJiYgaGlkZUZpZWxkcy5pbmNsdWRlcygnY29sdW1ucycpICkgPyAoXG4gICAgICAgICAgICAgICAgPFJhbmdlQ29udHJvbFxuICAgICAgICAgICAgICAgICAgICBsYWJlbD17X18oJ0NvbHVtbnMnLCAndm9kaS1leHRlbnNpb25zJyl9XG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXsgY29sdW1ucyB9XG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsgdGhpcy5vbkNoYW5nZUNvbHVtbnMgfVxuICAgICAgICAgICAgICAgICAgICBtaW49eyBhcHBseUZpbHRlcnMoICd2b2RpLmNvbXBvbmVudC5zaG9ydGNvZGVBdHRzLmNvbHVtbnMubWluJywgbWluQ29sdW1ucyApIH1cbiAgICAgICAgICAgICAgICAgICAgbWF4PXsgYXBwbHlGaWx0ZXJzKCAndm9kaS5jb21wb25lbnQuc2hvcnRjb2RlQXR0cy5jb2x1bW5zLm1heCcsIG1heENvbHVtbnMgKSB9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICApIDogJycgfVxuICAgICAgICAgICAgICAgIHsgISggaGlkZUZpZWxkcyAmJiBoaWRlRmllbGRzLmluY2x1ZGVzKCdvcmRlcmJ5JykgKSA/IChcbiAgICAgICAgICAgICAgICA8U2VsZWN0Q29udHJvbFxuICAgICAgICAgICAgICAgICAgICBsYWJlbD17X18oJ09yZGVyYnknLCAndm9kaS1leHRlbnNpb25zJyl9XG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXsgb3JkZXJieSB9XG4gICAgICAgICAgICAgICAgICAgIG9wdGlvbnM9eyBhcHBseUZpbHRlcnMoICd2b2RpLmNvbXBvbmVudC5zaG9ydGNvZGVBdHRzLm9yZGVyYnkub3B0aW9ucycsIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIHsgbGFiZWw6IF9fKCdUaXRsZScsICd2b2RpLWV4dGVuc2lvbnMnKSwgdmFsdWU6ICd0aXRsZScgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHsgbGFiZWw6IF9fKCdEYXRlJywgJ3ZvZGktZXh0ZW5zaW9ucycpLCB2YWx1ZTogKCBwb3N0VHlwZSA9PT0gJ21vdmllJyA/ICdyZWxlYXNlX2RhdGUnIDogJ2RhdGUnICkgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHsgbGFiZWw6IF9fKCdJRCcsICd2b2RpLWV4dGVuc2lvbnMnKSwgdmFsdWU6ICdpZCcgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHsgbGFiZWw6IF9fKCdSYW5kb20nLCAndm9kaS1leHRlbnNpb25zJyksIHZhbHVlOiAncmFuZCcgfSxcbiAgICAgICAgICAgICAgICAgICAgXSwgdGhpcy5wcm9wcyApIH1cbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyB0aGlzLm9uQ2hhbmdlT3JkZXJieSB9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICApIDogJycgfVxuICAgICAgICAgICAgICAgIHsgISggaGlkZUZpZWxkcyAmJiBoaWRlRmllbGRzLmluY2x1ZGVzKCdvcmRlcicpICkgPyAoXG4gICAgICAgICAgICAgICAgPFNlbGVjdENvbnRyb2xcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw9e19fKCdPcmRlcicsICd2b2RpLWV4dGVuc2lvbnMnKX1cbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9eyBvcmRlciB9XG4gICAgICAgICAgICAgICAgICAgIG9wdGlvbnM9eyBhcHBseUZpbHRlcnMoICd2b2RpLmNvbXBvbmVudC5zaG9ydGNvZGVBdHRzLm9yZGVyLm9wdGlvbnMnLCBbXG4gICAgICAgICAgICAgICAgICAgICAgICB7IGxhYmVsOiBfXygnQVNDJywgJ3ZvZGktZXh0ZW5zaW9ucycpLCB2YWx1ZTogJ0FTQycgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHsgbGFiZWw6IF9fKCdERVNDJywgJ3ZvZGktZXh0ZW5zaW9ucycpLCB2YWx1ZTogJ0RFU0MnIH0sXG4gICAgICAgICAgICAgICAgICAgIF0sIHRoaXMucHJvcHMgKSB9XG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsgdGhpcy5vbkNoYW5nZU9yZGVyIH1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICkgOiAnJyB9XG4gICAgICAgICAgICAgICAgeyAhKCBoaWRlRmllbGRzICYmIGhpZGVGaWVsZHMuaW5jbHVkZXMoJ2lkcycpICkgPyAoXG4gICAgICAgICAgICAgICAgPFBvc3RTZWxlY3RvclxuICAgICAgICAgICAgICAgICAgICBwb3N0VHlwZSA9IHsgcG9zdFR5cGUgfVxuICAgICAgICAgICAgICAgICAgICBwb3N0U3RhdHVzID0geyBwb3N0U3RhdHVzIH1cbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0ZWRQb3N0SWRzPXsgaWRzID8gaWRzLnNwbGl0KCcsJykubWFwKE51bWJlcikgOiBbXSB9XG4gICAgICAgICAgICAgICAgICAgIHVwZGF0ZVNlbGVjdGVkUG9zdElkcz17IHRoaXMub25DaGFuZ2VJZHMgfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgKSA6ICcnIH1cbiAgICAgICAgICAgICAgICB7ICggcG9zdFR5cGUgPT09ICd2aWRlbycgKSAmJiBjYXRUYXhvbm9teSAmJiAhKCBoaWRlRmllbGRzICYmIGhpZGVGaWVsZHMuaW5jbHVkZXMoJ2NhdGVnb3J5JykgKSA/IChcbiAgICAgICAgICAgICAgICA8VGVybVNlbGVjdG9yXG4gICAgICAgICAgICAgICAgICAgIHBvc3RUeXBlID0geyBwb3N0VHlwZSB9XG4gICAgICAgICAgICAgICAgICAgIHRheG9ub215ID0geyBjYXRUYXhvbm9teSB9XG4gICAgICAgICAgICAgICAgICAgIHRpdGxlID0geyBfXygnU2VhcmNoIENhdGVnb3J5JywgJ3ZvZGktZXh0ZW5zaW9ucycpIH1cbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0ZWRUZXJtSWRzPXsgY2F0ZWdvcnkgPyBjYXRlZ29yeS5zcGxpdCgnLCcpLm1hcChOdW1iZXIpIDogW10gfVxuICAgICAgICAgICAgICAgICAgICB1cGRhdGVTZWxlY3RlZFRlcm1JZHM9eyB0aGlzLm9uQ2hhbmdlQ2F0ZWdvcnkgfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgKSA6ICggY2F0VGF4b25vbXkgJiYgISggaGlkZUZpZWxkcyAmJiBoaWRlRmllbGRzLmluY2x1ZGVzKCdnZW5yZScpICkgPyAoXG4gICAgICAgICAgICAgICAgPFRlcm1TZWxlY3RvclxuICAgICAgICAgICAgICAgICAgICBwb3N0VHlwZSA9IHsgcG9zdFR5cGUgfVxuICAgICAgICAgICAgICAgICAgICB0YXhvbm9teSA9IHsgY2F0VGF4b25vbXkgfVxuICAgICAgICAgICAgICAgICAgICB0aXRsZSA9IHsgX18oJ1NlYXJjaCBHZW5yZScsICd2b2RpLWV4dGVuc2lvbnMnKSB9XG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdGVkVGVybUlkcz17IGdlbnJlID8gZ2VucmUuc3BsaXQoJywnKS5tYXAoTnVtYmVyKSA6IFtdIH1cbiAgICAgICAgICAgICAgICAgICAgdXBkYXRlU2VsZWN0ZWRUZXJtSWRzPXsgdGhpcy5vbkNoYW5nZUdlbnJlIH1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICkgOiAnJyApIH1cbiAgICAgICAgICAgICAgICB7ICEoIGhpZGVGaWVsZHMgJiYgaGlkZUZpZWxkcy5pbmNsdWRlcygndGFnJykgKSA/IChcbiAgICAgICAgICAgICAgICA8VGVybVNlbGVjdG9yXG4gICAgICAgICAgICAgICAgICAgIHBvc3RUeXBlID0geyBwb3N0VHlwZSB9XG4gICAgICAgICAgICAgICAgICAgIHRheG9ub215ID0geyB0YWdUYXhvbm9teSB9XG4gICAgICAgICAgICAgICAgICAgIHRpdGxlID0geyBfXygnU2VhcmNoIFRhZycsICd2b2RpLWV4dGVuc2lvbnMnKSB9XG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdGVkVGVybUlkcz17IHRhZyA/IHRhZy5zcGxpdCgnLCcpLm1hcChOdW1iZXIpIDogW10gfVxuICAgICAgICAgICAgICAgICAgICB1cGRhdGVTZWxlY3RlZFRlcm1JZHM9eyB0aGlzLm9uQ2hhbmdlVGFnIH1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICkgOiAnJyB9XG4gICAgICAgICAgICAgICAgeyAhKCBoaWRlRmllbGRzICYmIGhpZGVGaWVsZHMuaW5jbHVkZXMoJ2ZlYXR1cmVkJykgKSA/IChcbiAgICAgICAgICAgICAgICA8Q2hlY2tib3hDb250cm9sXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsPXtfXygnRmVhdHVyZWQnLCAndm9kaS1leHRlbnNpb25zJyl9XG4gICAgICAgICAgICAgICAgICAgIGhlbHA9e19fKCdDaGVjayB0byBzZWxlY3QgZmVhdHVyZWQgcG9zdHMuJywgJ3ZvZGktZXh0ZW5zaW9ucycpfVxuICAgICAgICAgICAgICAgICAgICBjaGVja2VkPXsgZmVhdHVyZWQgfVxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17IHRoaXMub25DaGFuZ2VGZWF0dXJlZCB9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICApIDogJycgfVxuICAgICAgICAgICAgICAgIHsgISggaGlkZUZpZWxkcyAmJiBoaWRlRmllbGRzLmluY2x1ZGVzKCd0b3BfcmF0ZWQnKSApID8gKFxuICAgICAgICAgICAgICAgIDxDaGVja2JveENvbnRyb2xcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw9e19fKCdUb3AgUmF0ZWQnLCAndm9kaS1leHRlbnNpb25zJyl9XG4gICAgICAgICAgICAgICAgICAgIGhlbHA9e19fKCdDaGVjayB0byBzZWxlY3QgdG9wIHJhdGVkIHBvc3RzLicsICd2b2RpLWV4dGVuc2lvbnMnKX1cbiAgICAgICAgICAgICAgICAgICAgY2hlY2tlZD17IHRvcF9yYXRlZCB9XG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsgdGhpcy5vbkNoYW5nZVRvcFJhdGVkIH1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICkgOiAnJyB9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICB9XG59IiwiaW1wb3J0IHsgSXRlbUxpc3QgfSBmcm9tIFwiLi9JdGVtTGlzdFwiO1xuaW1wb3J0ICogYXMgYXBpIGZyb20gJy4uL3V0aWxzL2FwaSc7XG5pbXBvcnQgeyB1bmlxdWVCeUlkLCBkZWJvdW5jZSB9IGZyb20gJy4uL3V0aWxzL3VzZWZ1bC1mdW5jcyc7XG5cbmNvbnN0IHsgX18gfSA9IHdwLmkxOG47XG5jb25zdCB7IEljb24gfSA9IHdwLmNvbXBvbmVudHM7XG5jb25zdCB7IENvbXBvbmVudCB9ID0gd3AuZWxlbWVudDtcblxuLyoqXG4gKiBUZXJtU2VsZWN0b3IgQ29tcG9uZW50XG4gKi9cbmV4cG9ydCBjbGFzcyBUZXJtU2VsZWN0b3IgZXh0ZW5kcyBDb21wb25lbnQge1xuICAgIC8qKlxuICAgICAqIENvbnN0cnVjdG9yIGZvciBUZXJtU2VsZWN0b3IgQ29tcG9uZW50LlxuICAgICAqIFNldHMgdXAgc3RhdGUsIGFuZCBjcmVhdGVzIGJpbmRpbmdzIGZvciBmdW5jdGlvbnMuXG4gICAgICogQHBhcmFtIG9iamVjdCBwcm9wcyAtIGN1cnJlbnQgY29tcG9uZW50IHByb3BlcnRpZXMuXG4gICAgICovXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIoLi4uYXJndW1lbnRzKTtcbiAgICAgICAgdGhpcy5wcm9wcyA9IHByb3BzO1xuXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAgICAgICB0ZXJtczogW10sXG4gICAgICAgICAgICBsb2FkaW5nOiBmYWxzZSxcbiAgICAgICAgICAgIHR5cGU6IHByb3BzLnBvc3RUeXBlIHx8ICdwb3N0JyxcbiAgICAgICAgICAgIHRheG9ub215OiBwcm9wcy50YXhvbm9teSB8fCAnY2F0ZWdvcnknLFxuICAgICAgICAgICAgdGF4b25vbWllczogW10sXG4gICAgICAgICAgICBmaWx0ZXI6ICcnLFxuICAgICAgICAgICAgZmlsdGVyTG9hZGluZzogZmFsc2UsXG4gICAgICAgICAgICBmaWx0ZXJUZXJtczogW10sXG4gICAgICAgICAgICBpbml0aWFsTG9hZGluZzogZmFsc2UsXG4gICAgICAgIH07XG5cbiAgICAgICAgdGhpcy5hZGRUZXJtID0gdGhpcy5hZGRUZXJtLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMucmVtb3ZlVGVybSA9IHRoaXMucmVtb3ZlVGVybS5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLmhhbmRsZUlucHV0RmlsdGVyQ2hhbmdlID0gdGhpcy5oYW5kbGVJbnB1dEZpbHRlckNoYW5nZS5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLmRvVGVybUZpbHRlciA9IGRlYm91bmNlKHRoaXMuZG9UZXJtRmlsdGVyLmJpbmQodGhpcyksIDMwMCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogV2hlbiB0aGUgY29tcG9uZW50IG1vdW50cyBpdCBjYWxscyB0aGlzIGZ1bmN0aW9uLlxuICAgICAqIEZldGNoZXMgdGVybXMgdGF4b25vbWllcywgc2VsZWN0ZWQgdGVybXMgdGhlbiBtYWtlcyBmaXJzdCBjYWxsIGZvciB0ZXJtc1xuICAgICAqL1xuICAgIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIGluaXRpYWxMb2FkaW5nOiB0cnVlLFxuICAgICAgICB9KTtcblxuICAgICAgICBhcGkuZ2V0VGF4b25vbWllcyggeyB0eXBlOiB0aGlzLnN0YXRlLnR5cGUgfSApXG4gICAgICAgICAgICAudGhlbigoIHJlc3BvbnNlICkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICAgICAgICB0YXhvbm9taWVzOiByZXNwb25zZVxuICAgICAgICAgICAgICAgIH0sICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5yZXRyaWV2ZVNlbGVjdGVkVGVybXMoKVxuICAgICAgICAgICAgICAgICAgICAgICAgLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbml0aWFsTG9hZGluZzogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogR2V0VGVybXMgd3JhcHBlciwgYnVpbGRzIHRoZSByZXF1ZXN0IGFyZ3VtZW50IGJhc2VkIHN0YXRlIGFuZCBwYXJhbWV0ZXJzIHBhc3NlZC9cbiAgICAgKiBAcGFyYW0ge29iamVjdH0gYXJncyAtIGRlc2lyZWQgYXJndW1lbnRzIChjYW4gYmUgZW1wdHkpLlxuICAgICAqIEByZXR1cm5zIHtQcm9taXNlPFQ+fVxuICAgICAqL1xuICAgIGdldFRlcm1zKGFyZ3MgPSB7fSkge1xuICAgICAgICBjb25zdCB7IHNlbGVjdGVkVGVybUlkcyB9ID0gdGhpcy5wcm9wcztcblxuICAgICAgICBjb25zdCBkZWZhdWx0QXJncyA9IHtcbiAgICAgICAgICAgIHBlcl9wYWdlOiAxMCxcbiAgICAgICAgICAgIHR5cGU6IHRoaXMuc3RhdGUudHlwZSxcbiAgICAgICAgICAgIHRheG9ub215OiB0aGlzLnN0YXRlLnRheG9ub215LFxuICAgICAgICAgICAgc2VhcmNoOiB0aGlzLnN0YXRlLmZpbHRlcixcbiAgICAgICAgfTtcblxuICAgICAgICBjb25zdCByZXF1ZXN0QXJndW1lbnRzID0ge1xuICAgICAgICAgICAgLi4uZGVmYXVsdEFyZ3MsXG4gICAgICAgICAgICAuLi5hcmdzXG4gICAgICAgIH07XG5cbiAgICAgICAgcmVxdWVzdEFyZ3VtZW50cy5yZXN0QmFzZSA9IHRoaXMuc3RhdGUudGF4b25vbWllc1t0aGlzLnN0YXRlLnRheG9ub215XS5yZXN0X2Jhc2U7XG5cbiAgICAgICAgcmV0dXJuIGFwaS5nZXRUZXJtcyhyZXF1ZXN0QXJndW1lbnRzKVxuICAgICAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChyZXF1ZXN0QXJndW1lbnRzLnNlYXJjaCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZpbHRlclRlcm1zOiByZXNwb25zZS5maWx0ZXIoKHsgaWQgfSkgPT4gc2VsZWN0ZWRUZXJtSWRzLmluZGV4T2YoaWQpID09PSAtMSksXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiByZXNwb25zZTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICAgICAgdGVybXM6IHVuaXF1ZUJ5SWQoWy4uLnRoaXMuc3RhdGUudGVybXMsIC4uLnJlc3BvbnNlXSksXG4gICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICAvLyByZXR1cm4gcmVzcG9uc2UgdG8gY29udGludWUgdGhlIGNoYWluXG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlc3BvbnNlO1xuICAgICAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogR2V0cyB0aGUgc2VsZWN0ZWQgdGVybXMgYnkgaWQgZnJvbSB0aGUgYHRlcm1zYCBzdGF0ZSBvYmplY3QgYW5kIHNvcnRzIHRoZW0gYnkgdGhlaXIgcG9zaXRpb24gaW4gdGhlIHNlbGVjdGVkIGFycmF5LlxuICAgICAqIEByZXR1cm5zIEFycmF5IG9mIG9iamVjdHMuXG4gICAgICovXG4gICAgZ2V0U2VsZWN0ZWRUZXJtcygpIHtcbiAgICAgICAgY29uc3QgeyBzZWxlY3RlZFRlcm1JZHMgfSA9IHRoaXMucHJvcHM7XG4gICAgICAgIHJldHVybiB0aGlzLnN0YXRlLnRlcm1zXG4gICAgICAgICAgICAuZmlsdGVyKCh7IGlkIH0pID0+IHNlbGVjdGVkVGVybUlkcy5pbmRleE9mKGlkKSAhPT0gLTEpXG4gICAgICAgICAgICAuc29ydCgoYSwgYikgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IGFJbmRleCA9IHRoaXMucHJvcHMuc2VsZWN0ZWRUZXJtSWRzLmluZGV4T2YoYS5pZCk7XG4gICAgICAgICAgICAgICAgY29uc3QgYkluZGV4ID0gdGhpcy5wcm9wcy5zZWxlY3RlZFRlcm1JZHMuaW5kZXhPZihiLmlkKTtcblxuICAgICAgICAgICAgICAgIGlmIChhSW5kZXggPiBiSW5kZXgpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDE7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaWYgKGFJbmRleCA8IGJJbmRleCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gLTE7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgcmV0dXJuIDA7XG4gICAgICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBNYWtlcyB0aGUgbmVjZXNzYXJ5IGFwaSBjYWxscyB0byBmZXRjaCB0aGUgc2VsZWN0ZWQgdGVybXMgYW5kIHJldHVybnMgYSBwcm9taXNlLlxuICAgICAqIEByZXR1cm5zIHsqfVxuICAgICAqL1xuICAgIHJldHJpZXZlU2VsZWN0ZWRUZXJtcygpIHtcbiAgICAgICAgY29uc3QgeyB0ZXJtVHlwZSwgc2VsZWN0ZWRUZXJtSWRzIH0gPSB0aGlzLnByb3BzO1xuICAgICAgICBjb25zdCB7IHRheG9ub21pZXMgfSA9IHRoaXMuc3RhdGU7XG5cbiAgICAgICAgaWYgKCBzZWxlY3RlZFRlcm1JZHMgJiYgIXNlbGVjdGVkVGVybUlkcy5sZW5ndGggPiAwICkge1xuICAgICAgICAgICAgLy8gcmV0dXJuIGEgZmFrZSBwcm9taXNlIHRoYXQgYXV0byByZXNvbHZlcy5cbiAgICAgICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4gcmVzb2x2ZSgpKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0aGlzLmdldFRlcm1zKHtcbiAgICAgICAgICAgIGluY2x1ZGU6IHRoaXMucHJvcHMuc2VsZWN0ZWRUZXJtSWRzLmpvaW4oJywnKSxcbiAgICAgICAgICAgIHBlcl9wYWdlOiAxMDAsXG4gICAgICAgICAgICB0ZXJtVHlwZVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBBZGRzIGRlc2lyZWQgdGVybSBpZCB0byB0aGUgc2VsZWN0ZWRUZXJtSWRzIExpc3RcbiAgICAgKiBAcGFyYW0ge0ludGVnZXJ9IHRlcm1faWRcbiAgICAgKi9cbiAgICBhZGRUZXJtKHRlcm1faWQpIHtcbiAgICAgICAgaWYgKHRoaXMuc3RhdGUuZmlsdGVyKSB7XG4gICAgICAgICAgICBjb25zdCB0ZXJtID0gdGhpcy5zdGF0ZS5maWx0ZXJUZXJtcy5maWx0ZXIocCA9PiBwLmlkID09PSB0ZXJtX2lkKTtcbiAgICAgICAgICAgIGNvbnN0IHRlcm1zID0gdW5pcXVlQnlJZChbXG4gICAgICAgICAgICAgICAgLi4udGhpcy5zdGF0ZS50ZXJtcyxcbiAgICAgICAgICAgICAgICAuLi50ZXJtXG4gICAgICAgICAgICBdKTtcblxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgdGVybXNcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5wcm9wcy51cGRhdGVTZWxlY3RlZFRlcm1JZHMoW1xuICAgICAgICAgICAgLi4udGhpcy5wcm9wcy5zZWxlY3RlZFRlcm1JZHMsXG4gICAgICAgICAgICB0ZXJtX2lkXG4gICAgICAgIF0pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJlbW92ZXMgZGVzaXJlZCB0ZXJtIGlkIHRvIHRoZSBzZWxlY3RlZFRlcm1JZHMgTGlzdFxuICAgICAqIEBwYXJhbSB7SW50ZWdlcn0gdGVybV9pZFxuICAgICAqL1xuICAgIHJlbW92ZVRlcm0odGVybV9pZCkge1xuICAgICAgICB0aGlzLnByb3BzLnVwZGF0ZVNlbGVjdGVkVGVybUlkcyhbXG4gICAgICAgICAgICAuLi50aGlzLnByb3BzLnNlbGVjdGVkVGVybUlkc1xuICAgICAgICBdLmZpbHRlcihpZCA9PiBpZCAhPT0gdGVybV9pZCkpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEhhbmRsZXMgdGhlIHNlYXJjaCBib3ggaW5wdXQgdmFsdWVcbiAgICAgKiBAcGFyYW0gc3RyaW5nIHR5cGUgLSBjb21lcyBmcm9tIHRoZSBldmVudCBvYmplY3QgdGFyZ2V0LlxuICAgICAqL1xuICAgIGhhbmRsZUlucHV0RmlsdGVyQ2hhbmdlKHsgdGFyZ2V0OiB7IHZhbHVlOmZpbHRlciA9ICcnIH0gPSB7fSB9ID0ge30pIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICBmaWx0ZXJcbiAgICAgICAgfSwgKCkgPT4ge1xuICAgICAgICAgICAgaWYgKCFmaWx0ZXIpIHtcbiAgICAgICAgICAgICAgICAvLyByZW1vdmUgZmlsdGVyZWQgdGVybXNcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5zZXRTdGF0ZSh7IGZpbHRlcmVkVGVybXM6IFtdLCBmaWx0ZXJpbmc6IGZhbHNlIH0pO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB0aGlzLmRvVGVybUZpbHRlcigpO1xuICAgICAgICB9KVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEFjdHVhbCBhcGkgY2FsbCBmb3Igc2VhcmNoaW5nIGZvciBxdWVyeSwgdGhpcyBmdW5jdGlvbiBpcyBkZWJvdW5jZWQgaW4gY29uc3RydWN0b3IuXG4gICAgICovXG4gICAgZG9UZXJtRmlsdGVyKCkge1xuICAgICAgICBjb25zdCB7IGZpbHRlciA9ICcnIH0gPSB0aGlzLnN0YXRlO1xuXG4gICAgICAgIGlmICghZmlsdGVyKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIGZpbHRlcmluZzogdHJ1ZSxcbiAgICAgICAgICAgIGZpbHRlckxvYWRpbmc6IHRydWVcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy5nZXRUZXJtcygpXG4gICAgICAgICAgICAudGhlbigoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgICAgIGZpbHRlckxvYWRpbmc6IGZhbHNlXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZW5kZXJzIHRoZSBUZXJtU2VsZWN0b3IgY29tcG9uZW50LlxuICAgICAqL1xuICAgIHJlbmRlcigpIHtcbiAgICAgICAgY29uc3QgeyB0aXRsZSA9IF9fKCdTZWFyY2ggVGVybScsICd2b2RpJykgfSA9IHRoaXMucHJvcHM7XG4gICAgICAgIGNvbnN0IGlzRmlsdGVyZWQgPSB0aGlzLnN0YXRlLmZpbHRlcmluZztcbiAgICAgICAgY29uc3QgdGVybUxpc3QgPSBpc0ZpbHRlcmVkICYmICF0aGlzLnN0YXRlLmZpbHRlckxvYWRpbmcgPyB0aGlzLnN0YXRlLmZpbHRlclRlcm1zIDogW107XG4gICAgICAgIGNvbnN0IFNlbGVjdGVkVGVybUxpc3QgID0gdGhpcy5nZXRTZWxlY3RlZFRlcm1zKCk7XG5cbiAgICAgICAgY29uc3QgYWRkSWNvbiA9IDxJY29uIGljb249XCJwbHVzXCIgLz47XG4gICAgICAgIGNvbnN0IHJlbW92ZUljb24gPSA8SWNvbiBpY29uPVwibWludXNcIiAvPjtcblxuICAgICAgICBjb25zdCBzZWFyY2hpbnB1dHVuaXF1ZUlkID0gJ3NlYXJjaGlucHV0LScgKyBNYXRoLnJhbmRvbSgpLnRvU3RyaW5nKDM2KS5zdWJzdHIoMiwgMTYpO1xuXG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbXBvbmVudHMtYmFzZS1jb250cm9sIGNvbXBvbmVudHMtdGVybS1zZWxlY3RvclwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29tcG9uZW50cy1iYXNlLWNvbnRyb2xfX2ZpZWxkLS1zZWxlY3RlZFwiPlxuICAgICAgICAgICAgICAgICAgICA8aDI+eyB0aXRsZSB9PC9oMj5cbiAgICAgICAgICAgICAgICAgICAgPEl0ZW1MaXN0XG4gICAgICAgICAgICAgICAgICAgICAgICBpdGVtcz17U2VsZWN0ZWRUZXJtTGlzdH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGxvYWRpbmc9e3RoaXMuc3RhdGUuaW5pdGlhbExvYWRpbmd9XG4gICAgICAgICAgICAgICAgICAgICAgICBhY3Rpb249e3RoaXMucmVtb3ZlVGVybX1cbiAgICAgICAgICAgICAgICAgICAgICAgIGljb249e3JlbW92ZUljb259XG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb21wb25lbnRzLWJhc2UtY29udHJvbF9fZmllbGRcIj5cbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9e3NlYXJjaGlucHV0dW5pcXVlSWR9IGNsYXNzTmFtZT1cImNvbXBvbmVudHMtYmFzZS1jb250cm9sX19sYWJlbFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPEljb24gaWNvbj1cInNlYXJjaFwiIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiY29tcG9uZW50cy10ZXh0LWNvbnRyb2xfX2lucHV0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkPXtzZWFyY2hpbnB1dHVuaXF1ZUlkfVxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInNlYXJjaFwiXG4gICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj17X18oJ1BsZWFzZSBlbnRlciB5b3VyIHNlYXJjaCBxdWVyeS4uLicsICd2b2RpLWV4dGVuc2lvbnMnKX1cbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLmZpbHRlcn1cbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUlucHV0RmlsdGVyQ2hhbmdlfVxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICA8SXRlbUxpc3RcbiAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW1zPXt0ZXJtTGlzdH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGxvYWRpbmc9e3RoaXMuc3RhdGUuaW5pdGlhbExvYWRpbmd8fHRoaXMuc3RhdGUubG9hZGluZ3x8dGhpcy5zdGF0ZS5maWx0ZXJMb2FkaW5nfVxuICAgICAgICAgICAgICAgICAgICAgICAgZmlsdGVyZWQ9e2lzRmlsdGVyZWR9XG4gICAgICAgICAgICAgICAgICAgICAgICBhY3Rpb249e3RoaXMuYWRkVGVybX1cbiAgICAgICAgICAgICAgICAgICAgICAgIGljb249e2FkZEljb259XG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICB9XG59IiwiY29uc3QgeyBhcGlGZXRjaCB9ID0gd3A7XG5cbi8qKlxuICogTWFrZXMgYSBnZXQgcmVxdWVzdCB0byB0aGUgUG9zdFR5cGVzIGVuZHBvaW50LlxuICpcbiAqIEByZXR1cm5zIHtQcm9taXNlPGFueT59XG4gKi9cbmV4cG9ydCBjb25zdCBnZXRQb3N0VHlwZXMgPSAoKSA9PiB7XG4gICAgcmV0dXJuIGFwaUZldGNoKCB7IHBhdGg6ICcvd3AvdjIvdHlwZXMnIH0gKTtcbn07XG5cbi8qKlxuICogTWFrZXMgYSBnZXQgcmVxdWVzdCB0byB0aGUgZGVzaXJlZCBwb3N0IHR5cGUgYW5kIGJ1aWxkcyB0aGUgcXVlcnkgc3RyaW5nIGJhc2VkIG9uIGFuIG9iamVjdC5cbiAqXG4gKiBAcGFyYW0ge3N0cmluZ3xib29sZWFufSByZXN0QmFzZSAtIHJlc3QgYmFzZSBmb3IgdGhlIHF1ZXJ5LlxuICogQHBhcmFtIHtvYmplY3R9IGFyZ3NcbiAqIEByZXR1cm5zIHtQcm9taXNlPGFueT59XG4gKi9cbmV4cG9ydCBjb25zdCBnZXRQb3N0cyA9ICh7IHJlc3RCYXNlID0gZmFsc2UsIC4uLmFyZ3MgfSkgPT4ge1xuICAgIGNvbnN0IHF1ZXJ5U3RyaW5nID0gT2JqZWN0LmtleXMoYXJncykubWFwKGFyZyA9PiBgJHthcmd9PSR7YXJnc1thcmddfWApLmpvaW4oJyYnKTtcblxuICAgIGxldCBwYXRoID0gYC93cC92Mi8ke3Jlc3RCYXNlfT8ke3F1ZXJ5U3RyaW5nfSZfZW1iZWRgO1xuICAgIHJldHVybiBhcGlGZXRjaCggeyBwYXRoOiBwYXRoIH0gKTtcbn07XG5cbi8qKlxuICogTWFrZXMgYSBnZXQgcmVxdWVzdCB0byB0aGUgUG9zdFR5cGUgVGF4b25vbWllcyBlbmRwb2ludC5cbiAqXG4gKiBAcmV0dXJucyB7UHJvbWlzZTxhbnk+fVxuICovXG5leHBvcnQgY29uc3QgZ2V0VGF4b25vbWllcyA9ICh7IC4uLmFyZ3MgfSkgPT4ge1xuICAgIGNvbnN0IHF1ZXJ5U3RyaW5nID0gT2JqZWN0LmtleXMoYXJncykubWFwKGFyZyA9PiBgJHthcmd9PSR7YXJnc1thcmddfWApLmpvaW4oJyYnKTtcblxuICAgIGxldCBwYXRoID0gYC93cC92Mi90YXhvbm9taWVzPyR7cXVlcnlTdHJpbmd9Jl9lbWJlZGA7XG4gICAgcmV0dXJuIGFwaUZldGNoKCB7IHBhdGg6IHBhdGggfSApO1xufTtcblxuLyoqXG4gKiBNYWtlcyBhIGdldCByZXF1ZXN0IHRvIHRoZSBkZXNpcmVkIHBvc3QgdHlwZSBhbmQgYnVpbGRzIHRoZSBxdWVyeSBzdHJpbmcgYmFzZWQgb24gYW4gb2JqZWN0LlxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfGJvb2xlYW59IHJlc3RCYXNlIC0gcmVzdCBiYXNlIGZvciB0aGUgcXVlcnkuXG4gKiBAcGFyYW0ge29iamVjdH0gYXJnc1xuICogQHJldHVybnMge1Byb21pc2U8YW55Pn1cbiAqL1xuZXhwb3J0IGNvbnN0IGdldFRlcm1zID0gKHsgcmVzdEJhc2UgPSBmYWxzZSwgLi4uYXJncyB9KSA9PiB7XG4gICAgY29uc3QgcXVlcnlTdHJpbmcgPSBPYmplY3Qua2V5cyhhcmdzKS5tYXAoYXJnID0+IGAke2FyZ309JHthcmdzW2FyZ119YCkuam9pbignJicpO1xuXG4gICAgbGV0IHBhdGggPSBgL3dwL3YyLyR7cmVzdEJhc2V9PyR7cXVlcnlTdHJpbmd9Jl9lbWJlZGA7XG4gICAgcmV0dXJuIGFwaUZldGNoKCB7IHBhdGg6IHBhdGggfSApO1xufTsiLCIvKipcbiAqIFJldHVybnMgYSB1bmlxdWUgYXJyYXkgb2Ygb2JqZWN0cyBiYXNlZCBvbiBhIGRlc2lyZWQga2V5LlxuICogQHBhcmFtIHthcnJheX0gYXJyIC0gYXJyYXkgb2Ygb2JqZWN0cy5cbiAqIEBwYXJhbSB7c3RyaW5nfGludH0ga2V5IC0ga2V5IHRvIGZpbHRlciBvYmplY3RzIGJ5XG4gKi9cbmV4cG9ydCBjb25zdCB1bmlxdWVCeSA9IChhcnIsIGtleSkgPT4ge1xuICAgIGxldCBrZXlzID0gW107XG4gICAgcmV0dXJuIGFyci5maWx0ZXIoaXRlbSA9PiB7XG4gICAgICAgIGlmIChrZXlzLmluZGV4T2YoaXRlbVtrZXldKSAhPT0gLTEpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBrZXlzLnB1c2goaXRlbVtrZXldKTtcbiAgICB9KTtcbn07XG5cbi8qKlxuICogUmV0dXJucyBhIHVuaXF1ZSBhcnJheSBvZiBvYmplY3RzIGJhc2VkIG9uIHRoZSBpZCBwcm9wZXJ0eS5cbiAqIEBwYXJhbSB7YXJyYXl9IGFyciAtIGFycmF5IG9mIG9iamVjdHMgdG8gZmlsdGVyLlxuICogQHJldHVybnMgeyp9XG4gKi9cbmV4cG9ydCBjb25zdCB1bmlxdWVCeUlkID0gYXJyID0+IHVuaXF1ZUJ5KGFyciwgJ2lkJyk7XG5cbi8qKlxuICogRGVib3VuY2UgYSBmdW5jdGlvbiBieSBsaW1pdGluZyBob3cgb2Z0ZW4gaXQgY2FuIHJ1bi5cbiAqIEBwYXJhbSB7ZnVuY3Rpb259IGZ1bmMgLSBjYWxsYmFjayBmdW5jdGlvblxuICogQHBhcmFtIHtJbnRlZ2VyfSB3YWl0IC0gVGltZSBpbiBtaWxsaXNlY29uZHMgaG93IGxvbmcgaXQgc2hvdWxkIHdhaXQuXG4gKiBAcmV0dXJucyB7RnVuY3Rpb259XG4gKi9cbmV4cG9ydCBjb25zdCBkZWJvdW5jZSA9IChmdW5jLCB3YWl0KSA9PiB7XG4gICAgbGV0IHRpbWVvdXQgPSBudWxsO1xuXG4gICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgY29uc3QgY29udGV4dCA9IHRoaXM7XG4gICAgICAgIGNvbnN0IGFyZ3MgPSBhcmd1bWVudHM7XG5cbiAgICAgICAgY29uc3QgbGF0ZXIgPSAoKSA9PiB7XG4gICAgICAgICAgICBmdW5jLmFwcGx5KGNvbnRleHQsIGFyZ3MpO1xuICAgICAgICB9O1xuXG4gICAgICAgIGNsZWFyVGltZW91dCh0aW1lb3V0KTtcbiAgICAgICAgdGltZW91dCA9IHNldFRpbWVvdXQobGF0ZXIsIHdhaXQpO1xuICAgIH1cbn07Il19
