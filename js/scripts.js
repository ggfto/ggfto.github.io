function goTo(link) {
    window.open(link, '_blank');
}

$(document).ready(function() {
    loadInfo(info);
    loadLinks(links);
});

function loadLinks(data) {
    let obj = $("#links");
    obj.empty();
    for(item of data) {
        if(item.active) {
            obj.append(`<div class="box accent-border has-text-primary-light btn" onclick="goTo('${item.value}')">${(item.icon != null ? `<i class="bi bi-${item.icon}"></i> ` : '')}${item.label}</div>`);
        }
    }
}

function loadInfo(data) {
    $("#title").text(data.title);
    $("#sub-title").text(data.subTitle);
    $("#bio").html(data.bio);
    $("#profile-img").attr("src", data.pic);
    $("html").css({"backgroundImage": `url("${data.bg}")`});
}