<?php include 'header.php'; ?>

    <main class="first-page background">

        <div class="container">

            <div class="light">
                <h1 class="large">Wow!</h1>
                <h2><strong>57</strong> Green Points</h2>
                <p class="small">With 100 points you go one level higher.<br>
                    One tree is planted per 100 levels.</p>
            </div>

            <div class="card-box">

                <div class="card">
                    <div class="card-content">
                        <img src="images/icon-city.svg" alt="Icon Agency"></img>
                        <p>Agency</p>
                    </div>
                </div>

                <div class="card">
                    <div class="card-content">
                        <img src="images/icon-voucher.svg" alt="Icon Voucher"></img>
                        <p>Voucher</p>
                    </div>
                </div>

                <div class="card">
                    <div class="card-content">
                        <img src="images/icon-quiz.svg" alt="Icon Quiz"></img>
                        <p>Quiz</p>
                    </div>
                </div>

                <div class="card">
                    <div class="card-content">
                        <img src="images/icon-certificate.svg" alt="Icon Cerificate"></img>
                        <p>Cerificate</p>
                    </div>
                </div>

            </div>

            <img class="superman2" src="images/superman2.svg" alt="Superman">



            <a href="index2.php" class="settings">
                <img src="images/icon-settings.svg" alt="Edit Settings">
            </a>

            <a href="#" class="plus">
                <img src="images/icon-plus.svg" alt="Add Information">
            </a>

            <style>

                .settings {
                    position: absolute;
                    bottom: 40px;
                    left: 35px;
                }

                .plus {
                    position: absolute;
                    bottom: 40px;
                    right: 35px;
                }

            </style>


        </div>

    </main>


    <style>

        .light * {
            color: #fff;
        }

        .card-box {
            display: flex;
            margin-left: -15px;
            flex-wrap: wrap;
        }

        .card {
            width: calc(50vw - 43px);
            height: calc(50vw - 43px);
            padding-left: 15px;
            padding-bottom: 15px;
            position: relative;
        }

        .card-content {
            height: calc(100% - 30px);
            width: calc(100% - 30px);
            border-radius: 5px;
            background: #fff;
            display: inline-flex;
            align-items: center;
            justify-content: center;
            flex-direction: column;
            padding: 15px;
        }

        .card p {
            text-transform: uppercase;
            color: #22A178;
            margin-bottom: 0;
            font-weight: 600;
            letter-spacing: .5px;
        }

        .superman2 {
            position: absolute;
            left: 50%;
            transform: translate(-50%);
            bottom: 15px;
        }

    </style>

<?php include 'footer.php'; ?>