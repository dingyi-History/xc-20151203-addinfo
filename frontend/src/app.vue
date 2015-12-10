<template>
    <top></top>
    <a v-link="{ path: '/index' }">Go to Index</a>
    <a v-link="{ path: '/info' }">Go to info</a>
    <router-view></router-view>
</template>