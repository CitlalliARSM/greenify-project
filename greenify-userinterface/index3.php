<?php include 'header.php'; ?>

<main class="second-page container">

    <h1>Personal</h1>
    <p class="small">1 does not apply - 5 applies exactly</p>

    <form action="saveData2" method="POST">
        <p>
            Separate the garbage
        </p>
        <div class="radio-box">
            <label class="box">
                <input value="1" type="radio" name="garbage" required>
                <span class="checkmark">1</span>
            </label>
            <label value="2" class="box">
                <input type="radio" name="garbage">
                <span class="checkmark">2</span>
            </label>
            <label value="3" class="box">
                <input type="radio" name="garbage">
                <span class="checkmark">3</span>
            </label>
            <label class="box">
                <input value="4" type="radio" name="garbage">
                <span class="checkmark">4</span>
            </label>
            <label value="5" class="box">
                <input type="radio" name="garbage">
                <span class="checkmark">5</span>
            </label>
        </div>

        <p>
            Eat local foods
        </p>
        <div class="radio-box">
            <label class="box">
                <input value="1" type="radio" name="localfood" required>
                <span class="checkmark">1</span>
            </label>
            <label class="box">
                <input value="2" type="radio" name="localfood">
                <span class="checkmark">2</span>
            </label>
            <label class="box">
                <input value="3" type="radio" name="localfood">
                <span class="checkmark">3</span>
            </label>
            <label class="box">
                <input value="4" type="radio" name="localfood">
                <span class="checkmark">4</span>
            </label>
            <label class="box">
                <input value="5" type="radio" name="localfood">
                <span class="checkmark">5</span>
            </label>
        </div>

        <p>
            Buy not local products
        </p>
        <div class="radio-box">
            <label class="box">
                <input value="1" type="radio" name="notlocal" required>
                <span class="checkmark">1</span>
            </label>
            <label class="box">
                <input value="2" type="radio" name="notlocal">
                <span  class="checkmark">2</span>
            </label>
            <label class="box">
                <input value="3"  type="radio" name="notlocal">
                <span class="checkmark">3</span>
            </label>
            <label class="box">
                <input value="4" type="radio" name="notlocal">
                <span class="checkmark">4</span>
            </label>
            <label class="box">
                <input value="5" type="radio" name="notlocal">
                <span class="checkmark">5</span>
            </label>
        </div>

        <p>
            Fly by plane
        </p>
        <div class="radio-box">
            <label class="box">
                <input value="1"  type="radio" name="plane" required>
                <span class="checkmark">1</span>
            </label>
            <label class="box">
                <input value="2"  type="radio" name="plane">
                <span class="checkmark">2</span>
            </label>
            <label class="box">
                <input value="3" type="radio" name="plane">
                <span class="checkmark">3</span>
            </label>
            <label class="box">
                <input value="4"  type="radio" name="plane">
                <span class="checkmark">4</span>
            </label>
            <label class="box">
                <input value="5"  type="radio" name="plane">
                <span class="checkmark">5</span>
            </label>
        </div>
        <a type="submit" class="btn" href="index4.php">Next Step</a>

    </form>

</main>

<?php include 'footer.php'; ?>
