<template>
  <section>
    <div class="mb-3">
      <span class="h4">
        <FaIcon type="download" />

        <span>资源下载 <sup><small>Downloads</small></sup></span>
      </span>
    </div>

    <TransitionFadeSlide direction="x">
      <ul>
        <li
          v-for="download in list"
          :key="download.name"
        >
          <a
            :href="download.link"
            target="_blank"
          >
            {{ download.name }}
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
  name: 'ListDownloads',

  components: {
    FaIcon,
    TransitionFadeSlide,
  },

  data () {
    return {
      list: [
        {
          name: 'ArchLinux',
          link: '//mirrors.xjtu.edu.cn/archlinux/iso/latest/',
        },
        {
          name: 'CentOS',
          link: '//mirrors.xjtu.edu.cn/centos/7/isos/x86_64/',
        },
        {
          name: 'Debian',
          link: '//mirrors.xjtu.edu.cn/debian-cd/current/amd64/iso-cd/',
        },
        {
          name: 'Fedora',
          link: '//mirrors.xjtu.edu.cn/fedora/releases/28/Workstation/x86_64/iso/',
        },
        {
          name: 'Linux Kernel',
          link: '//mirrors.xjtu.edu.cn/kernel/',
        },
        {
          name: 'Ubuntu',
          link: '//mirrors.xjtu.edu.cn/ubuntu-releases/',
        },
      ],
    }
  },
}
</script>
