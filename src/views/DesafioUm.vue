<template>
    <div class="body-style">
        <nav class="nav-style">
            <div>
                <span class="color-start-title detals-title">Code</span>
                <span class="color-end-title detals-title">lândia</span>
            </div>
            <div>
                <input class="input-style" type="text" name="input-search" id="input-search">
            </div>
        </nav>
    </div>
</template>
  
  <script setup lang="ts">
    
  </script>
  <style>
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
    }
    .input-style {
        border: 2px solid #ffffff;
        width: 800px;
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