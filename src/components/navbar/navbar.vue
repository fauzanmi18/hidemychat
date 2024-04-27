<template>
 <div class="p-4 flex justify-center">
    <!-- <div class="sm:hidden">
      <label for="Tab" class="sr-only">Tab</label>
  
      <select id="Tab" class="w-full rounded-md border-gray-200">
        <option>Settings</option>
        <option class="text-base font-poppins font-semibold">Messages</option>
        <option class="text-base font-poppins font-semibold">Archive</option>
        <option select>Notifications</option>
      </select>
    </div> -->
  
    <div class="block">
      <nav class="flex gap-6 bg-white p-2 rounded-lg" aria-label="Tabs">
        <RouterLink :to="{name: menu.route}" v-for="(menu, index) in menus" :key="menu.id" 
        :class="{'bg-gray-100 text-gray-700': $route.name == menu.route}" class="cursor-pointer shrink-0 rounded-lg p-2 text-sm font-poppins font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700">
            {{ menu.name }}
        </RouterLink>
      </nav>
    </div>
  </div>
</template>

<script setup>
import menus from './menu';
console.log(`woi`,menus)
</script>