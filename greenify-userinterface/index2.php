<?php include 'header.php'; ?>

<main class="second-page container">

    <h1>Mobility</h1>
    <p class="small">How many hours at week you drive normally.</p>

    <form action="saveData.php" method="POST" >

        <p>
            <input required name="car" type="number" placeholder="0" min="1" max="85">
            <label>Car</label>
        </p>

        <p>
            <input required name="motorcycle" type="number" placeholder="0" min="1" max="85">
            <label>Motorcycle</label>
        </p>

        <p>
            <input required name="carsharing" type="number" placeholder="0" min="1" max="85">
            <label>Carsharing</label>
        </p>

        <p>
            <input required name="public-transport" type="number" placeholder="0" min="1" max="85">
            <label>Public transport</label>
        </p>

        <p>
            <input required name="bicycle" type="number" placeholder="0" min="1" max="85">
            <label>Bicycle / E-Bicycle</label>
        </p>

        <p>
            <input required name="feets" type="number" placeholder="0" min="1" max="85">
            <label>Feets</label>
        </p>

        <a type="submit" class="btn" href="index3.php">Next Step</a>

    </form>

</main>

<?php include 'footer.php'; ?>
