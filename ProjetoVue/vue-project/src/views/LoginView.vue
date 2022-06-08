<script>
</script>

<template>
   <div class="screen_login">
     <div class="box_login">
       <div class="box_login_header"> Acesso as Suas Oficinas</div>
      <div class="box_login_inputs">
        <div class="input-group mb-3">
          <span class="input-group-text">
            <i class='bi bi-envelope'></i>
          </span>
          <input type="text" class="form-control" placeholder='Insira seu e-mail' >
        </div>
        <div class="input-group mb-3">
          <span class="input-group-text">
            <i class='bi bi-key'></i>
          </span>
          <input type="text" class="form-control" placeholder='Insira sua senha' >
        </div>
        <a href="#" class="link text-primary">Esqueceu sua Senha?</a>
        <button type="button" class="btn btn-primary col-6">Acessar</button>
      </div>
     </div>
   </div>
</template>

<style>
.box_login_header{
  font-size: 1.5rem;
  font-weight: 500;
}
.screen_login{
    height: 90vh;
    display: flex;
    align-items: center;
    justify-content: center;
}
.box_login{
  box-shadow: 0px 4px 16px 5px rgba(0,0,0,0.33);
  background-color: white;
  border-style: solid;
  border-width: 1px;
  border-color: #e9e9e9;
  height: 50vh;
  width: 30vw;
  padding:2vw;
  border-radius: 20px;
}
.box_login_inputs{
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  row-gap: 1vw;
  padding-top: 3vw;
}
</style>