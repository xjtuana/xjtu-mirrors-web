<template>
  <section>
    <div class="mb-3">
      <span class="h4">
        <FaIcon type="link" />

        <span>相关链接 <sup><small>Links</small></sup></span>
      </span>
    </div>

    <TransitionFadeSlide direction="x">
      <ul>
        <li
          v-for="link in list"
          :key="link.name"
        >
          <a
            :href="link.link"
            target="_blank"
          >
            {{ link.name }}
          </a>
        </li>
      </ul>
    </TransitionFadeSlide>
  </section>
</template>

<script>
import TransitionFadeSlide from './transitions/TransitionFadeSlide'
import FaIcon from './FaIcon'

export default {
  name: 'ListLinks',

  components: {
    FaIcon,
    TransitionFadeSlide,
  },

  data () {
    return {
      list: [
        {
          name: '西安交通大学网络信息中心',
          link: 'http://nic.xjtu.edu.cn',
        },
        {
          name: '西安交通大学学生网络管理协会',
          link: 'https://ana.xjtu.edu.cn',
        },
        {
          name: '西安交通大学团委挑战网',
          link: 'https://www.tiaozhan.com',
        },
      ],
    }
  },
}
</script>
