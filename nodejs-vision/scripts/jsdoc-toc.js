(function($) {
    // TODO: make the node ID configurable
    var treeNode = $('#jsdoc-toc-nav');

    // initialize the tree
    treeNode.tree({
        autoEscape: false,
        closedIcon: '&#x21e2;',
        data: [{"label":"<a href=\"google.html\">google</a>","id":"google","children":[{"label":"<a href=\"google.cloud.html\">cloud</a>","id":"google.cloud","children":[{"label":"<a href=\"google.cloud.vision.html\">vision</a>","id":"google.cloud.vision","children":[{"label":"<a href=\"google.cloud.vision.v1.html\">v1</a>","id":"google.cloud.vision.v1","children":[]},{"label":"<a href=\"google.cloud.vision.v1p1beta1.html\">v1p1beta1</a>","id":"google.cloud.vision.v1p1beta1","children":[]}]}]},{"label":"<a href=\"google.protobuf.html\">protobuf</a>","id":"google.protobuf","children":[]},{"label":"<a href=\"google.rpc.html\">rpc</a>","id":"google.rpc","children":[]},{"label":"<a href=\"google.type.html\">type</a>","id":"google.type","children":[]}]},{"label":"@google-cloud","id":"module:@google-cloud","children":[{"label":"<a href=\"module-@google-cloud_vision.html\">vision</a>","id":"module:@google-cloud/vision","children":[]}]},{"label":"v1","id":"v1","children":[{"label":"<a href=\"v1.ImageAnnotatorClient.html\">ImageAnnotatorClient</a>","id":"v1.ImageAnnotatorClient","children":[]},{"label":"<a href=\"v1.ProductSearchClient.html\">ProductSearchClient</a>","id":"v1.ProductSearchClient","children":[]}]},{"label":"v1p1beta1","id":"v1p1beta1","children":[{"label":"<a href=\"v1p1beta1.ImageAnnotatorClient.html\">ImageAnnotatorClient</a>","id":"v1p1beta1.ImageAnnotatorClient","children":[]}]},{"label":"v1p2beta1","id":"v1p2beta1","children":[{"label":"<a href=\"v1p2beta1.ImageAnnotatorClient.html\">ImageAnnotatorClient</a>","id":"v1p2beta1.ImageAnnotatorClient","children":[]}]},{"label":"v1p3beta1","id":"v1p3beta1","children":[{"label":"<a href=\"v1p3beta1.ImageAnnotatorClient.html\">ImageAnnotatorClient</a>","id":"v1p3beta1.ImageAnnotatorClient","children":[]},{"label":"<a href=\"v1p3beta1.ProductSearchClient.html\">ProductSearchClient</a>","id":"v1p3beta1.ProductSearchClient","children":[]}]}],
        openedIcon: ' &#x21e3;',
        saveState: true,
        useContextMenu: false
    });

    // add event handlers
    // TODO
})(jQuery);
