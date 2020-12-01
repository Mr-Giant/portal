<template>
    <div class="contact-area ptb-70">
        <div class="container">
            <div class="section-title">
                <h2>您有任何咨询，请联系我们。</h2>
                <div class="bar"></div>
                <p></p>
            </div>

            <div class="row">
                <div class="col-lg-5 col-md-12">
                    <div class="contact-info">
                        <ul>
                            <li>
                                <div class="icon fa-twitter">
                                    <a href="#" target="_blank"><i class="fab fa-skype" style="color: white;"></i></a>
                                </div>
                                <span>Skype</span>
                                <a href="skype:live:7daae3efabdd1638?chat">live:7daae3efabdd1638</a>
                            </li>

                            <li>
                                <div class="icon">
                                   <a href="#" target="_blank"><i class="fab fa-telegram" style="color: white;"></i></a>
                                </div>
                                <span>Telegram</span>
                                <a href="tg://resolve?domain=@wellpay1">@wellpay1</a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div class="col-lg-7 col-md-12">
                    <div class="contact-form">
                        <form id="contactForm">
                            <div class="row">
                                <div class="col-lg-6 col-md-6">
                                    <div class="form-group">
                                        <input type="text" name="name" id="name" class="form-control" required data-error="Please enter your name" placeholder="名称">
                                        <div class="help-block with-errors"></div>
                                    </div>
                                </div>

                                <div class="col-lg-6 col-md-6">
                                    <div class="form-group">
                                        <input type="email" name="email" id="email" class="form-control" required data-error="Please enter your email" placeholder="邮箱">
                                        <div class="help-block with-errors"></div>
                                    </div>
                                </div>

                                <div class="col-lg-6 col-md-6">
                                    <div class="form-group">
                                        <input type="text" name="phone_number" id="phone_number" required data-error="Please enter your number" class="form-control" placeholder="手机号">
                                        <div class="help-block with-errors"></div>
                                    </div>
                                </div>

                                <div class="col-lg-6 col-md-6">
                                    <div class="form-group">
                                        <input type="text" name="msg_subject" id="msg_subject" class="form-control" required data-error="Please enter your subject" placeholder="类型">
                                        <div class="help-block with-errors"></div>
                                    </div>
                                </div>

                                <div class="col-lg-12 col-md-12">
                                    <div class="form-group">
                                        <textarea name="message" class="form-control" id="message" cols="30" rows="6" required data-error="Write your message" placeholder="您的问题！"></textarea>
                                        <div class="help-block with-errors"></div>
                                    </div>
                                </div>

                                <div class="col-lg-12 col-md-12">
                                    <button type="submit" class="btn btn-primary"> 提交 </button>
                                    <div id="msgSubmit" class="h3 text-center hidden"></div>
                                    <div class="clearfix"></div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
        
        <div class="bg-map"><img src="../../assets/images/bg-map.png" alt="image"></div>
    </div>
</template>

<script>
    export default {
        name: 'ContactArea'
    }
</script>