<template>
    <div class="comparisons-area ptb-70 bg-f7fafd">
        <div class="container">
            <div class="section-title">
                <h2>与他人比较</h2>
                <div class="bar"></div>
                <!-- <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p> -->
            </div>

            <div class="comparisons-table table-responsive">
                <table class="table">
                    <thead>
                        <tr>
                            <th scope="col">参数</th>
                            <th scope="col">自由职业者</th>
                            <th scope="col">平台</th>
                            <th scope="col">其他商户</th>
                        </tr>
                    </thead>
                    
                    <tbody>
                        <tr>
                            <td>控制付款时间</td>
                            <td><i class="flaticon-check-mark"></i></td>
                            <td><i class="flaticon-check-mark"></i></td>
                            <td><i class="flaticon-check-mark"></i></td>
                        </tr>
                        <tr>
                            <td>透明的支出</td>
                            <td><i class="flaticon-check-mark"></i></td>
                            <td><i class="flaticon-check-mark"></i></td>
                            <td><i class="flaticon-check-mark"></i></td>
                        </tr>
                        <tr>
                            <td>全自动化</td>
                            <td><i class="flaticon-cancel"></i></td>
                            <td><i class="flaticon-check-mark"></i></td>
                            <td><i class="flaticon-check-mark"></i></td>
                        </tr>
                        <tr>
                            <td>存款统计</td>
                            <td><i class="flaticon-check-mark"></i></td>
                            <td><i class="flaticon-check-mark"></i></td>
                            <td><i class="flaticon-cancel"></i></td>
                        </tr>
                        <tr>
                            <td>技术支持</td>
                            <td><i class="flaticon-check-mark"></i></td>
                            <td><i class="flaticon-check-mark"></i></td>
                            <td><i class="flaticon-check-mark"></i></td>
                        </tr>
                        <tr>
                            <td>24×7支持</td>
                            <td><i class="flaticon-cancel"></i></td>
                            <td><i class="flaticon-check-mark"></i></td>
                            <td><i class="flaticon-check-mark"></i></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Comparisons'
    }
</script>