(window.webpackJsonp=window.webpackJsonp||[]).push([[65],{370:function(e,t,o){"use strict";o.r(t);var _=o(7),a=Object(_.a)({},(function(){var e=this,t=e._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"guide-objects"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#guide-objects"}},[e._v("#")]),e._v(" Guide Objects")]),e._v(" "),t("p",[e._v("Go to "),t("em",[t("a",{attrs:{href:"https://github.com/Dlubal-Software/RSTAB_Python_Client/tree/main/RSTAB/GuideObjects",target:"_blank",rel:"noopener noreferrer"}},[e._v("[source]"),t("OutboundLink")],1)])]),e._v(" "),t("h2",{attrs:{id:"note"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#note"}},[e._v("#")]),e._v(" Note")]),e._v(" "),t("h3",{attrs:{id:"note-no-text-type-parameter-offset-para-rotation-display-style-name-show-comment-comment-params-model"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#note-no-text-type-parameter-offset-para-rotation-display-style-name-show-comment-comment-params-model"}},[e._v("#")]),e._v(" Note(no, text, type, parameter, offset_para, rotation, display_style, name, show_comment, comment, params, model)")]),e._v(" "),t("ul",[t("li",[t("p",[t("strong",[e._v("Parameters")])]),e._v(" "),t("ul",[t("li",[t("p",[t("strong",[e._v("no")]),e._v(" ("),t("em",[e._v("int")]),e._v(") – Note Tag")])]),e._v(" "),t("li",[t("p",[t("strong",[e._v("text")]),e._v(" ("),t("em",[e._v("str")]),e._v(") – Note Text")])]),e._v(" "),t("li",[t("p",[t("strong",[e._v("type")]),e._v(" ("),t("em",[e._v("enum")]),e._v(") – Note Type Enumeration")])]),e._v(" "),t("li",[t("p",[t("strong",[e._v("parameter")]),e._v(" ("),t("em",[e._v("int/list")]),e._v(") – Note Type Parameter")]),e._v(" "),t("blockquote",[t("ul",[t("li",[e._v("for type == NoteType.NOTE_TYPE_POINT:"),t("br"),e._v("\nparameter = [point_coordinate_x, point_coordinate_y, point_coordinate_z]")])])]),e._v(" "),t("blockquote",[t("ul",[t("li",[e._v("for type == NoteType.NOTE_TYPE_NODE:"),t("br"),e._v("\nparameter = node number")])])]),e._v(" "),t("blockquote",[t("ul",[t("li",[e._v("for type == NoteType.NOTE_TYPE_MEMBER:"),t("br"),e._v("\nparameter = [member number, note_member_reference_type enumeration, member_distance_is_defined_as_relative(bool), member_distance_relative/absolute] (if relative is true than value must be between 0.0 and 1.0)")])])])]),e._v(" "),t("li",[t("p",[t("strong",[e._v("offset_para")]),e._v(" ("),t("em",[e._v("list")]),e._v(") – Offset Parameter")]),e._v(" "),t("blockquote",[t("ul",[t("li",[e._v("for offset_para[0] == NoteOffsetType.OFFSET_TYPE_XYZ:"),t("br"),e._v("\noffset_para = [offset_coordinate_x, offset_coordinate_y, offset_coordinate_z]")])])]),e._v(" "),t("blockquote",[t("ul",[t("li",[e._v("for offset_para[0] == NoteOffsetType.OFFSET_TYPE_XY:"),t("br"),e._v("\noffset_para = [offset_coordinate_x, offset_coordinate_y]")])])]),e._v(" "),t("blockquote",[t("ul",[t("li",[e._v("for offset_para[0] == NoteOffsetType.OFFSET_TYPE_XZ:"),t("br"),e._v("\noffset_para = [offset_coordinate_x, offset_coordinate_z]")])])]),e._v(" "),t("blockquote",[t("ul",[t("li",[e._v("for offset_para[0] == NoteOffsetType.OFFSET_TYPE_YZ:"),t("br"),e._v("\noffset_para = [offset_coordinate_y, offset_coordinate_z]")])])])]),e._v(" "),t("li",[t("p",[t("strong",[e._v("rotation")]),e._v(" ("),t("em",[e._v("float")]),e._v(") – Note Display Rotation")])]),e._v(" "),t("li",[t("p",[t("strong",[e._v("display_style")]),e._v(" ("),t("em",[e._v("int")]),e._v(") – Note Display Style Tag (Value must be from 0 to 4)")])]),e._v(" "),t("li",[t("p",[t("strong",[e._v("name")]),e._v(" ("),t("em",[e._v("str")]),e._v(") – User Defined Name")])]),e._v(" "),t("li",[t("p",[t("strong",[e._v("show_comment")]),e._v(" ("),t("em",[e._v("bool")]),e._v(") – Enable/disable Show Comment")])]),e._v(" "),t("li",[t("p",[t("strong",[e._v("comment")]),e._v(" ("),t("em",[e._v("str")]),e._v(", "),t("em",[e._v("optional")]),e._v(") – Comment")])]),e._v(" "),t("li",[t("p",[t("strong",[e._v("params")]),e._v(" ("),t("em",[e._v("dict")]),e._v(", "),t("em",[e._v("optional")]),e._v(") – Any WS Parameter relevant to the object and its value in form of a dictionary")])]),e._v(" "),t("li",[t("p",[t("strong",[e._v("model")]),e._v(" ("),t("em",[e._v("RSTAB Class, optional")]),e._v(") - Model to be edited")])])])])])])}),[],!1,null,null,null);t.default=a.exports}}]);