<template>
<div>
    <div class="about-section">
        <h1 class="about"><u>About Me.</u></h1><br>
        <p>Robbi Meidyansyah Pratama nama saya.</p>
        <p>Bukan siapa-siapa hanya seorang pemimpi</p>
        <p>Yang mempunyai impian pribadi.</p>
        <p>Dan jangan lupa bersyukur ;)</p>
    </div><br><br>

    <div class="row">
        <div class="column">
            <div class="card">
                <img class="foto" src="@/assets/orang1.png" alt="ibbor" style="width:100%">
                <div class="container"><br>
                    <h2>Robbi Meidyansyah Pratama</h2>
                    <p class="title"><b><u>Manusia Biasa</u></b></p>
                    <p>"Ada Yang lebih Indah Dari Kesuksesan, Yaitu Menikmati Prosesnya"</p>
                    <p></p>
                    <p>robbimeidyansyah@gmail.com</p>
                    <p><button class="button"><b-icon icon="Insta" /><a href="https://www.instagram.com/robbiimp"> Instagram</a></button></p>
                </div>
            </div>
        </div>
    </div><br><br>
</div>
</template>

<script>

</script>

<style>
html {
  box-sizing: border-box;
}

*, *:before, *:after {
  box-sizing: inherit;
}

.column {
  position: relative;
  float: left;
  width: 33.3%;
  margin: auto;
  padding: 0 8px;
}

.card {
  border-radius: 15px;
  align-items: center;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  margin: 8px;
}

.foto {
  border-radius: 15px;
}

.about {
    font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
}

.about-section {
  padding: 50px;
  text-align: center;
  background-color: #474e5d;
  color: white;
}

.container {
  padding: 0 16px;
}

.container::after, .row::after {
  content: "";
  clear: both;
  display: table;
}

.title {

  color: black;
}

.button {
  border-radius: 50px;
  border: none;
  outline: 0;
  display: inline-block;
  padding: 8px;
  color: white;
  background-color: #000;
  text-align: center;
  cursor: pointer;
  width: 100%;
}

.button:hover {
  background-color: #555;
}

@media screen and (max-width: 650px) {
  .column {
    width: 100%;
    display: block;
  }
}
</style>
