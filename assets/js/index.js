const App = (function () {

    return {
        initResize: function () {
            function handler() {
                const h = window.innerHeight - $('.page-wrapper .page-header').height()
                $('.page-wrapper .page-main .page-main-sidemenu').css('max-height', h)
                $(".page-main-body").css('max-height', h)
            }
            window.addEventListener('resize', handler)
            handler()
        },
        initRecommendSlider: function () {
            $(".page-wrapper .page-main .page-main-body .games-gallery .games-gallery-item .recommend-bullets>div").each(function (i) {
                $(this).on("click", function () {
                    $(this).parent().find("div").removeClass("active");
                    $(this).addClass("active")
                    $(".page-wrapper .page-main .page-main-body .games-gallery .games-gallery-item .recommend-section").css("translate", -i * parseInt($(this).parent().parent().css('width')) + "px 0px")
                })
            })
        },
        initGameSection: function () {
            $(".page-wrapper .page-main .page-main-body .games-gallery .games-gallery-item svg.button").on("click", function () {
                const g_s_item = $(this).parent().parent().find(".games-section")
                const cur_tx = parseInt(g_s_item.css("translate").split(' ')[0].replace('px', ''))
                const container_w = parseInt(g_s_item.parent().css('width'))
                const w_limit = -container_w * 1.5
                const tar_tx = cur_tx + container_w * ($(this).hasClass('button-prev') ? 1 : -1)
                g_s_item.css('translate', Math.max(w_limit, Math.min(0, tar_tx)) + "px 0px")

                if (tar_tx <= w_limit) {
                    $(this).parent().find(".button-next").addClass("disabled")
                } else {
                    $(this).parent().find(".button-next").removeClass("disabled")
                }
                if (tar_tx > 0) {
                    $(this).parent().find(".button-prev").addClass("disabled")
                } else {
                    $(this).parent().find(".button-prev").removeClass("disabled")
                }

            })
            setInterval(function () {
                const new_val = ($(".page-wrapper .page-main .page-main-body .iframe .progress-bar").width() + 1) % 300;
                $(".page-wrapper .page-main .page-main-body .iframe .progress-bar").css('width', `${new_val}px`)
            }, 100)

        },
        initMiscel: function () {
            $(".page-wrapper .page-main .page-main-body .page-main-footer .footer-text-dynamic").on('click', function () {
                $(this).toggleClass('closed opened')
            })
        },
        initModal: function () {
            $(".button.gen-qr-code").on('click', function () {
                $(".qr-code-content").css('display', 'flex')
            })
            $(".modal-wrapper .close").on('click', function () {
                $(this).parent().parent().hide()
            })
            $(".page-wrapper .page-main .page-main-sidemenu .page-main-sidemenu-section li").on('click',function(){
                window.location.assign('./category.html')
            })
            $(".page-wrapper .page-header .nav-bar .nav-bar-sign .button.profile").on('click', function () {
                $(".page-wrapper .page-header .nav-bar .nav-bar-sign .profile-menu-wrapper").toggleClass('hide')
            })
            $(".page-wrapper .page-header .nav-bar .nav-bar-sign>div.button.register").on('click', function () {
                $(".modal-register-wrapper.modal-wrapper").css('display', 'flex')
            })
            $(".page-wrapper .page-header .nav-bar .nav-bar-sign>div.button.deposit").on('click', function () {
                $(".modal-deposit-wrapper.modal-wrapper").css('display', 'flex')
            })
            $(".page-wrapper .page-header .nav-bar .nav-bar-sign>div.button.enter").on('click', function () {
                $(".modal-login-wrapper.modal-wrapper").css('display', 'flex')
            })
            $(".page-wrapper .page-main .page-main-body .games-gallery .games-gallery-item .games-section .game-card-wrapper .hover-canvas .button").on('click', function () {
                window.location.assign('./play-game.html')
            })
            $(".page-wrapper .page-main .page-main-body .games-gallery .games-gallery-item span.view-all").on('click', function () {
                window.location.assign('./category.html')
            })
            $(".page-wrapper .page-main .page-main-body .load-more .button:not(.disabled)").on('click', function () {
                $(".page-wrapper .page-main .page-main-body .games-gallery .games-gallery-item .games-section .game-card-wrapper.skeleton-loading").show()
                const the_button = $(this)
                setTimeout(() => {
                    $(".page-wrapper .page-main .page-main-body .games-gallery .games-gallery-item .games-section .game-card-wrapper.skeleton-loading").remove()

                    let cards = '';
                    let skeletons = ''
                    for (i = 0; i < 15; i++) {
                        cards += getRandomCardItem()
                        skeletons += '<div class="game-card-wrapper skeleton-loading"> </div>'
                    }
                    $(".category-with-loading").html($(".category-with-loading").html() + cards + skeletons)
                    const count = document.querySelectorAll('.page-wrapper .page-main .page-main-body .games-gallery .games-gallery-item .games-section .game-card-wrapper:not(.skeleton-loading)').length
                    $(".load-more .progress-bar-wrapper .progress-bar").css('width', `${Math.min(400, count) * 160 / 400}px`)
                    $(".load-more .cur-count").html(`Mostrando ${count} de 400 jogos`)
                    if (count >= 400) {
                        the_button.addClass('disabled')
                    }
                }, 5000);
            })
            $(".page-wrapper .page-main .page-main-body .page-main-body-top .page-main-body-search input").on('focus', function () {
                $(this).parent().parent().addClass("searching")
            }).on('blur', function () {
                $(this).parent().parent().removeClass("searching")
            }).on('input', function () {
                const search_str = $(this).val().trim()
                const filtered_res = $(".page-wrapper .page-main .page-main-body .games-gallery .game-card-wrapper:not(.skeleton-loading)")
                    .filter(function (i, item) {
                        console.log($(item).find(".game-card-footer>span:first-child").text(),search_str,$(item).find(".game-card-footer>span:first-child").text().indexOf(search_str) >= 0)
                        return $(item).find(".game-card-footer>span:first-child").text().toLowerCase().indexOf(search_str.toLowerCase()) >= 0
                    })
                $(".page-wrapper .page-main .page-main-body .page-main-body-top .page-main-body-search .search-result-wrapper .category-with-loading").html(filtered_res.map(function(i,item){
                    return item.outerHTML
                }).toArray().join(""))
                $(".page-wrapper .page-main .page-main-body .page-main-body-top .page-main-body-search .search-result-wrapper .cur-count").html(`Mostrando ${filtered_res.length} jogos`)
            })
            $(".mobile-menu-footer .mobile-menu-toggle").on('click',function(){
                $(".page-wrapper .page-main .page-main-sidemenu").toggleClass('open-in-mobile');
            })
            $(".mobile-bar .mobile-menu-close").on('click',function(){
                $(".page-wrapper .page-main .page-main-sidemenu").removeClass('open-in-mobile');
            })
            $(".modal-login .button.enter").on('click', function () {
                $(".page-wrapper").addClass('session-logged-in')
                $(this).parent().parent().hide()
            })
            $(".iframe .button.enter").on('click', function () {
                $(".page-wrapper").addClass('session-logged-in')
            })
            $(".modal-login .forget-password-btn").on('click', function () {
                $(".modal-login .login-password").hide()
                $(".modal-login .forget-password").css('display', 'flex')
            })
            $(".page-wrapper .page-header .nav-bar .nav-bar-sign .profile-menu-wrapper>a").on('click', function () {
                $(".page-wrapper .page-header .nav-bar .nav-bar-sign .profile-menu-wrapper").toggleClass('hide')
            })
            $(".page-wrapper .page-header .nav-bar .nav-bar-sign .profile-menu-wrapper .enter").on('click', function () {
                $(".page-wrapper").removeClass('session-logged-in')
            })
            $(".form-wallet .button.sacar").on('click', function () {
                $(".modal-sacar-wrapper.modal-wrapper").css('display', 'flex')
            })
            $(".modal-sacar .button.regras").on('click', function () {
                $(".modal-regras-wrapper.modal-wrapper").css('display', 'flex')
            })
            $(".deposit-value>div.button").on('click', function () {
                $('input[placeholder="R$ 0,00"]').val($(this).attr('value')).trigger('input')
            })
            $('input[placeholder="R$ 0,00"]').on('keypress', function (e) {
                if (/\D/g.test(e.key)) {
                    e.preventDefault()
                }
            }).on('input', function (e) {
                let v = $(this).val().toString().replace(/\D/g, '').toString()
                while (v[0] === '0') v = v.substring(1)
                const cur_val = v.padStart(Math.max(0, 4 - v.length), "0")
                let val = (cur_val.substring(0, cur_val.length - 2) || "0") + "," + cur_val.substring(cur_val.length - 2, cur_val.length)
                if (val.length > 6) {
                    val = val.substring(0, val.length - 6) + "." + val.substring(val.length - 6, val.length)
                }
                val = "R$ " + val
                $(this).val(val)
            })
            $(".modals .input-group input").on('blur', function () {
                $(this).parent().addClass('written')
            }).on('change', function () {
                $(this).parent().addClass('written')
                if ($(this).val().trim() !== "") {
                    $(this).parent().addClass('filled')
                } else {
                    $(this).parent().removeClass('filled')
                }
            })
            $(".modals .input-group.cpf input").on('keypress', function (e) {
                if (/\D/g.test(e.key)) {
                    e.preventDefault()
                }
            }).on('input', function (e) {
                const cur_val = $(this).val().replace(/\D/g, '').toString()
                let val = cur_val.substring(0, 3)
                if (cur_val.length > 3) {
                    val += "."
                }
                val += cur_val.substring(3, 6)
                if (cur_val.length > 6) {
                    val += "."
                }
                val += cur_val.substring(6, 9)
                if (cur_val.length > 9) {
                    val += "-"
                }
                val += cur_val.substring(9, 11)
                $(this).val(val)
            })
            $(".input-group.phone input").on('keypress', function (e) {
                if (/\D/g.test(e.key)) {
                    e.preventDefault()
                }
            }).on('input', function (e) {
                const cur_val = $(this).val().replace(/\D/g, '').toString()
                let val = "(" + cur_val.substring(0, 2)
                if (cur_val.length > 2) {
                    val += ") "
                }
                if (cur_val.length <= 10) {
                    val += cur_val.substring(2, 6)
                    if (cur_val.length > 6) {
                        val += "-"
                    }
                    val += cur_val.substring(6, 10)
                } else {
                    val += cur_val.substring(2, 7)
                    if (cur_val.length > 6) {
                        val += "-"
                    }
                    val += cur_val.substring(7, 11)
                }
                if (val === "(") val = ""
                $(this).val(val)
            })
        }
    }
})()
$(function () {
    App.initResize()
    App.initRecommendSlider()
    App.initGameSection()
    App.initMiscel()
    App.initModal()
})