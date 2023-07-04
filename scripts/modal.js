$('.form').submit((e) =>{
    e.preventDefault();

    const form = $(e.currentTarget);
    const name = form.find("[name='name']");
    const phone = form.find("[name='phone']");
    const comment = form.find("[name='comment']");
    const to = form.find("[name='to']");

    [name, phone, comment, to].forEach(field => {
        if (field.val()=== ""){
            field.addClass("input-error");
        }
    });

    $.ajax({
        url: "https://webdev-api.loftschool.com/sendmail",
        method: "post",
        data: {
          name: name.val(),
          phone: phone.val(),
          comment: comment.val(),
          to: to.val(),
        },
        error: (data) => {},
      });

    $.fancybox.open({
        src: "#modal",
        type: "inline"
    })
}); 

$(".app-submit-btn").click(e => {
    e.preventDefault();

    $.fancybox.close();
});