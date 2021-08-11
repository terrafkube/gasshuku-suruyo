<template>
  <div class="grid grid-cols-6 grid-rows-12">
    <!-- header -->
    <header class="col-span-6 row-span-1">
      <general-header />
    </header>
    <!-- sidemenu -->
    <nav class="col-span-1 row-span-11">
			<p>あ</p>
		</nav>
    <!-- content -->
    <main class="col-span-5 row-span-11">
			<p>い</p>
		</main>
  </div>
</template>

<script>
import GeneralHeader from "../organisms/GeneralHeader.vue";
export default {
  name: "CampResultInputTemplate",
  components: {
    GeneralHeader,
  },
};
</script>

<style>
header {
  background-color: #ddd;
}
nav {
  background-color: #ccc;
}
main {
  background-color: #bbb;
}
footer {
  background-color: #aaa;
}
</style>
