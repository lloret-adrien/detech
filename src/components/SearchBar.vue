<template>
  <div class="input_left">
    <div class="input_icon">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        fill="none"
        viewBox="0 0 24 24"
      >
        <g clip-path="url(#clip0)" opacity=".25">
          <path
            stroke="#000"
            stroke-linejoin="round"
            stroke-width="1.5"
            d="M20.25 2.25H3.75A2.25 2.25 0 001.5 4.5v15a2.25 2.25 0 002.25 2.25h16.5a2.25 2.25 0 002.25-2.25v-15a2.25 2.25 0 00-2.25-2.25z"
          />
          <path
            stroke="#000"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="1.5"
            d="M4.5 5.25l3.75 3-3.75 3M9 11.249h3"
          />
        </g>
        <defs>
          <clipPath id="clip0">
            <path fill="#fff" d="M0 0h24v24H0z" />
          </clipPath>
        </defs>
      </svg>
    </div>
    <input type="text" placeholder="Rechercher" />
  </div>
</template>

<script>
export default {
  name: "SearchBar",
};
</script>
