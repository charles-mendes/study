<template>
    <div class="body-style">
        <nav class="nav-style">
            <div>
                <span class="color-start-title detals-title">Code</span>
                <span class="color-end-title detals-title">lândia</span>
            </div>
            <div>
                <input placeholder="Pesquisar no blog" class="input-style input-style-icon" type="text" name="input-search" id="input-search">
            </div>
        </nav>
    </div>
</template>
  
  <script setup lang="ts">
    
  </script>
  <style lang="scss">
    .body-style {
        background-color: #17171A;
        width: 100%;
        height: 100%;
    }
    .nav-style {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 30px;
        height: 291px;
    }
    .input-style {
        height: 64px;
        width: 1216px;
        padding: 16px, 24px, 16px, 24px;
        border-radius: 8px;
        border: 2px solid #252529;
        gap: 16px;
        background-color: #202024;
        color: #FFFFFF;
    }
    .input-style-icon{
        padding-left: 45px;
        background: url("svg/icon-search.svg") no-repeat left;
        background-position: 8px;
    }
    input:focus{
        border-radius: 8px;
        border: 2px solid #ffffff;
    }
    .detals-title {
        font-family: Space Grotesk;
        font-size: 40px;
        font-weight: 500;
        line-height: 51px;
        letter-spacing: 0em;
        text-align: center;
    }
    .color-start-title {
        color: #E07B67
    }
    .color-end-title {
        color: #FFFFFF
    }
  </style>