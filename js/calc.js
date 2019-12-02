$(document).ready(function() {
  let domain = {
    "Выберите домен": 0,
    "greendonbass.github.io": 0,
    "greendonbass.ru": 27,
    "greendonbass.org": 71,
    "donbass.green": 418,
    "greendonbass.eco": 591
  };

  let hosting = {
    "Выберите хостинг": 0,
    Github: 0,
    Эконом: 160,
    Скоростной: 290
  };

  let admin = {
    "Выберите тариф": 0,
    Минимум: 1220,
    Базовый: 3145,
    Стандарт: 5710,
    Оптимальный: 15340,
    Максимальный: 37870
  };

  function domainFillSelect() {
    let html = "";
    for (type in domain) {
      html += "<option value='" + type + "'>" + type + "</option>";
    }
    $("#dom").append(html);
    console.log(html);
  }
  domainFillSelect();

  function hostingFillSelect() {
    let html = "";
    for (type in hosting) {
      html += "<option value='" + type + "'>" + type + "</option>";
    }
    $("#host").append(html);
    console.log(html);
  }
  hostingFillSelect();

  function adminFillSelect() {
    let html = "";
    for (type in admin) {
      html += "<option value='" + type + "'>" + type + "</option>";
    }
    $("#adm").append(html);
    console.log(html);
  }
  adminFillSelect();

  $(".calculate").change(function() {
    domPrice = domain[$("#dom").val()];
    hostPrice = hosting[$("#host").val()];
    admPrice = admin[$("#adm").val()];
    sum = domPrice + hostPrice + admPrice;
    $("#itogo").html(sum);
    $("#itogoDom").html(domPrice);
    $("#itogoHost").html(hostPrice);
    $("#itogoAdmin").html(admPrice);
  });
});
