function cs(param){console.log((param == undefined)?"Here":param);}
function wait(time, statement){setTimeout(function(){statement()},time);}

(function($) {
    $.fn.extend({

        enlargeVideo: function() {

            return this.each(function() {
                videoButton = $(this);
                $(this).click(function() {
                    videoButton.css({
                        visibility: 'hidden'
                    });

                    wrapperX = videoButton.offset().left;
                    wrapperY = videoButton.offset().top;

                    var wrapper = $('<div></div>').attr('id', 'video-embded-wrapper').addClass('ui-corner-2px-all').css({
                        left: wrapperX,
                        top: wrapperY,
                        padding: '15px'
                    });

                    var video = $('<iframe allowfullscreen></iframe>').attr({
                        width: '640',
                        height: '360',
                        src: 'http://www.youtube.com/embed/UGtKGX8B9hU?rel=0',
                        frameborder: '0'
                    });

                    var close = $('<a></a>').attr({
                        id: 'close-video-wrapper',
                        href: '#'
                    }).click(function() {
                        video.remove();
                        $(this).remove();
                        wrapper.css({
                            width: 100,height: 50,padding: 0,
                            left: videoButton.offset().left,
                            top: videoButton.offset().top
                        });
                        wait(600,function(){
                            videoButton.css('visibility', 'visible');
                            wrapper.remove();
                        });
                    });

                    $('body').append(wrapper);
                    wrapper.css({
                        width: '640',height: '360',
                        left: $(document).width() / 2 - 320,
                        top: 130
                    });
                    wait(600,function(){
                        $('body').append(close.css({
                            left: $(document).width() / 2 + 340,
                            top: 122
                        }));
                        wrapper.append(video);                        
                    });
                });
            });
        },

        tabs: function() {
            var setActive = function(index, wrapper) {
                    var tabs = wrapper.children('ul');
                    var contents = wrapper.children('div');

                    $(tabs.children('li').removeClass('active')[index]).addClass('active');
                    $(contents.removeClass('active')[index]).addClass('active');
                }

            return this.each(function() {
                var wrapper = $(this);
                wrapper.addClass('ui-tabs');
                setActive(1, wrapper);

                wrapper.children('ul').children('li').on('click', function() {
                    setActive($(this).index(), wrapper);
                });
            });
        },

        toggleLogin: function() {
            return this.each(function(){
                var overlay = $('#overlay');
                if(overlay.length != 0){
                    overlay.remove();
                    $('#connexion-form-wrapper').hide();
                } else {
                    $(this).click(function(){
                        $('body').append($('<div>').attr('id','overlay'))
                        $('#connexion-form-wrapper').show().find('#connexion-form-close').click(function(){
                            $(this).toggleLogin();
                        });
                    });
                };
            });
        },

        actionScore: function() {

            return this.each(function(){
                cs();
                var scoreWrapper = $(this).find('#action-score');
                var scaleWidth = $(this).find('#action-scale-wrapper').width();
                var scoreWidth = scaleWidth / scoreWrapper.attr('goal') * scoreWrapper.text();
                wait(500,function(){
                    scoreWrapper.css({width:scoreWidth+'px',paddingRight:'10px'});                    
                });
            });
        },

        iconBasedMenu: function(){
            return this.each(function(){
                var self = $(this)
                self.find('li').each(function(){
                    $(this).click(function(){
                        var index = $(this).index();
                        $(this).addClass('active').siblings().removeClass('active');
                        $(self.siblings('section').removeClass('active')[index]).addClass('active');
                    });
                });
            });
        },

        lastestDiscussionsHandler: function() {

            return this.each(function(){
                var incrementTriggers = $(this).find('a');
                var counterWrapper = $(this).find('dt > p');
                incrementTriggers.each(function(){
                    $(this).click(function(){
                        var addingEffectElt = $('<p>').addClass('discussionCallbackEffect').text('+1');
                        var clickedIndex = $(this).index('#lastest-discussions a');
                        var relatedCounterWrapper = $(counterWrapper[clickedIndex]);
                        var prevValue = relatedCounterWrapper.addClass('active').text();
                        var newValue = 1;

                        $('.discussionCallbackEffect').remove();
                        addingEffectElt.css({top:relatedCounterWrapper.offset().top,left:relatedCounterWrapper.offset().left - 30});

                        if(prevValue == ''){
                            relatedCounterWrapper.text(0);
                        } else {
                            newValue += parseInt(prevValue);
                        };
                        $('body').append(addingEffectElt);
                        addingEffectElt.css({opacity:1,top:'-=20'});
                        wait(1000,function(){
                            relatedCounterWrapper.text(newValue);
                            // addingEffectElt.css({display:'block'});
                            addingEffectElt.css({opacity:0,top:'-=20'});
                            wait(2000,function(){
                                relatedCounterWrapper.removeClass('active');
                            });
                        });
                        return false;
                    });
                });
            });
        },

        connexion: function() {

            var buildForm = function(){
                var form = $('<form></form>').attr({action:'#',method:'POST'})
                    .append($('<input />').attr({type:'text',name:'connexion-login',placeholder:'Email'}).addClass('ui-corner-3px-all'))
                    .append($('<input />').attr({type:'password',name:'connexion-password',placeholder:'Mot de passe'}).addClass('ui-corner-3px-all'))
                    .append($('<input />').attr({type:'submit',value:'Valider'}).addClass('ui-corner-3px-all ui-button-warning'))
                    .append($('<p></p>').html('Ou connectez-vous avec <strong>Facebook</strong><br />').append($('<a></a>').attr({href:'#'}).addClass('facebook-connect')))

                return form;
            }

            return this.each(function() {
                var wrapper = $(this);
                var button = $(this).children('.button-connexion').children('a');
                var form = buildForm();
                wrapper.append(form);

                button.click(function(){
                    form.slideToggle('100');
                    return false;
                })
            });
        }

    });
})(jQuery);

$(document).ready(function(){
    initializeMap();
    $(".user-avatar-wrapper > a").toggleLogin();
    $(".icon-based-menu").iconBasedMenu()
    $("#video").enlargeVideo();
    $("#rewards").tabs();
    $('#lastest-discussions').lastestDiscussionsHandler();
    $("#action-counter-wrapper").actionScore()
    $("#user-connexion-wrapper").connexion()
});

