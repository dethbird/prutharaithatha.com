(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){var HorizontalPanelView=Backbone.View.extend({w:null,layout:null,scaleFactor:1,initialize:function(options){var that=this;that.w=$(window);that.layout=options.layout;that.w.resize(_.bind($.debounce(250,that.resize),that));that.resize()},resize:function(){var that=this;that.scaleFactor=that.w.width()/that.layout.panel.width;$(that.el).css({marginTop:(that.w.height()-that.scaleFactor*that.layout.panel.height)/2});_.each($(that.el).find(".object"),function(e,i){e=$(e);var object=_.findWhere(that.layout.objects,{id:e.attr("id")});e.css({width:that.scaleFactor*object.dimensions.width,height:that.scaleFactor*object.dimensions.height,top:that.scaleFactor*object.end_location.top,left:that.scaleFactor*object.end_location.left})})}});module.exports=HorizontalPanelView},{}],2:[function(require,module,exports){var HorizontalPanelView=require("../library/views/HorizontalPanelView");var horizontalPanelView=new HorizontalPanelView({el:"#container",layout:layout})},{"../library/views/HorizontalPanelView":1}]},{},[2]);