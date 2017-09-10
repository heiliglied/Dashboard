$("#content").summernote({
    height: 460,
});

function post_delete (_id) {
    var f = document.modify_form;
    f._id = _id;
    f.action = '/moon/delete';
    f.submit();
}