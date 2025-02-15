<template>
  <section>
    <header :class="['party-header', { 'no-party-link': !partyProgramLink }]">
      <div :class="['party-header-logo', { 'no-logo': !hasPartyLogo }]">
        <img
          v-if="hasPartyLogo"
          :src="partyLogo"
          :width="logoSize"
          :height="logoSize"
          :alt="partyName"
        >
        <span v-else>
          {{ partyToken }}
        </span>
      </div>

      <div class="party-header-info">
        <router-link v-if="!!answers"
          class="btn btn-dark btn-small"
          :to="{ path: resultsPath }"
        >
          {{ $t('party.backButtonLabel') }}
          <feather-corner-up-left />
        </router-link>
        <h1>{{ partyName }}</h1>
        <a
          v-if="!!partyProgramLink"
          class="btn"
          :href="partyProgramLink"
          target="_blank"
        >
          {{ $t('party.subtitle') }}
          <feather-external-link />
        </a>
      </div>
    </header>

    <div class="theses-legend">
      <p>{{ $t('party.legendLabel') }}:</p>
      <ul>
        <li v-for="option in options" :key="option.position">
          <component :is="'feather-' + positionToIconName(option.position)" />
          <span>{{ $t(`theses.${option.position}`) }}</span>
        </li>
      </ul>
    </div>

    <ul class="party-theses-list">
      <li class="list-header">
        <h2>{{ $t('party.tableHeading') }}</h2>
        <h2>{{ party.token }}</h2>
        <h2 v-if="!!answers">
          {{ $t('party.tableUser') }}
        </h2>
      </li>

      <li v-for="thesis in theses" :key="thesis.id">
        <div class="thesis-facts">
          <div class="list-thesis" @click="toggleStatement(thesis.id)">
            <div class="thesis-subline">
              <component :is="'feather-' + chevronIcon(thesis.id)" />
              <span>{{ getCategory(thesis.category) }}</span>
            </div>
            <h3>{{ getThesis(thesis.thesis) }}</h3>
          </div>

          <div class="statements-party">
            <component :is="'feather-' + getPartyPosition(thesis.id)" />
          </div>
          <div v-if="!!answers" class="statements-user">
            <component :is="'feather-' + getUserPosition(thesis.id)" />
          </div>
        </div>

        <div v-show="showStatement(thesis.id)" class="thesis-statement">
          <p><strong>{{ $t('party.partyAnswer') }}:</strong></p>
          <blockquote>
            {{ getPartyStatement(thesis.id) }}
          </blockquote>
        </div>
      </li>
    </ul>

    <router-link v-if="!!answers"
      class="btn btn-dark btn-small"
      :to="{ path: resultsPath }"
    >
      {{ $t('party.backButtonLabel') }}
      <feather-corner-up-left />
    </router-link>
  </section>
</template>

<script>
  import { parties, theses, options } from '@/data'
  import { getTranslatedUrl } from '@/i18n/helper'
  export default {
    name: 'Party',

    components: {
      'feather-external-link': () =>
        import('vue-feather-icons/icons/ExternalLinkIcon' /* webpackChunkName: "icons" */),
      'feather-corner-up-left': () =>
        import('vue-feather-icons/icons/CornerUpLeftIcon' /* webpackChunkName: "icons" */),
      'feather-chevron-up': () =>
        import('vue-feather-icons/icons/ChevronUpIcon' /* webpackChunkName: "icons" */),
      'feather-chevron-down': () =>
        import('vue-feather-icons/icons/ChevronDownIcon' /* webpackChunkName: "icons" */),
      'feather-circle': () =>
        import('vue-feather-icons/icons/CircleIcon' /* webpackChunkName: "icons" */),
      'feather-thumbs-up': () =>
        import('vue-feather-icons/icons/ThumbsUpIcon' /* webpackChunkName: "icons" */),
      'feather-thumbs-down': () =>
        import('vue-feather-icons/icons/ThumbsDownIcon' /* webpackChunkName: "icons" */),
      'feather-x': () =>
        import('vue-feather-icons/icons/XIcon' /* webpackChunkName: "icons" */)
    },

    data () {
      let answers

      if (this.$browser.supports('sessionStorage')) {
        answers = JSON.parse(sessionStorage.getItem('euromat-answers'))
      } else {
        answers = JSON.parse(this.$root.$data.backupStorage.answers)
      }

      return {
        logoSize: 60,
        partyLogo: this.hasPartyLogo && require(`@/assets/svg/${this.$route.params.token}-logo.svg`),
        partyToken: this.$route.params.token.toUpperCase(),
        party: parties.find(p => p.token === this.$route.params.token.toUpperCase()),
        answers,
        toggles: theses.map(t => ({ id: t.id, show: false })),
        theses,
        options
      }
    },

    computed: {
      resultsPath () {
        return getTranslatedUrl('results', getTranslatedUrl('theses', null, true))
      },
      hasPartyLogo () {
        try {
          require(`@/assets/svg/${this.$route.params.token}-logo.svg`)
          return true
        } catch (error) {
          return false
        }
      },
      partyName () {
        return this.party.name[this.$i18n.locale]
      },
      partyProgramLink () {
        return this.party.program[this.$i18n.locale]
      }
    },

    methods: {
      chevronIcon (id) {
        return this.showStatement(id)
          ? 'chevron-up'
          : 'chevron-down'
      },
      getCategory (category) {
        return category[this.$i18n.locale]
      },
      getThesis (thesis) {
        return thesis[this.$i18n.locale]
      },
      positionToIconName (position) {
        switch (position) {
          case 'positive':
            return 'thumbs-up'
          case 'negative':
            return 'thumbs-down'
          case 'skipped':
            return 'x'
          case 'neutral':
          default:
            return 'circle'
        }
      },
      getPartyPosition (id) {
        return this.positionToIconName(
          this.party.positions.find(p => p.thesis === id).position
        )
      },
      getPartyStatement (id) {
        return this.party.positions
          .find(p => p.thesis === id)
          .statement[this.$i18n.locale]
      },
      getUserPosition (id) {
        return this.positionToIconName(
          this.answers.find(a => a.thesis === id).position
        )
      },
      showStatement (id) {
        return this.toggles.find(t => t.id === id).show
      },
      toggleStatement (id) {
        const statement = this.toggles.find(t => t.id === id)
        statement.show = !statement.show
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import "~@/styles/animations";
  @import "~@/styles/colors";
  @import "~@/styles/layout";

  $breakpoint: 600px;
  $table-column-large: 70%;
  $table-column-small: 15%;

  svg {
    stroke: $text-color-base;
    filter: drop-shadow($text-shadow);

    path,
    polyline {
      stroke: $button-color;
    }
  }

  .party-header {
    display: flex;
    align-items: flex-start;
    margin-bottom: $base-gap;

    &.no-party-link {
      align-items: center;
    }

    @media (max-width: $breakpoint) {
      flex-direction: column;
    }

    .party-header-info {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      margin-right: $small-gap;

      .btn {
        margin-bottom: $small-gap / 2;
      }
    }

    h1 {
      margin-bottom: $small-gap;
    }

    .party-header-logo {
      margin-right: $small-gap;
      background: $background-secondary;
      padding: $small-gap;
      border-radius: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      box-shadow: $button-shadow;
      color: $text-color-invert;

      &.no-logo {
        width: 80px;
        height: 80px;
      }

      img {
        object-fit: contain;
      }

      span {
        font-weight: 700;
      }

      @media (max-width: $breakpoint) {
        margin-bottom: $base-gap;
        margin-right: 0;
      }
    }
  }

  .theses-legend {
    display: flex;
    flex-direction: column;
    font-size: $font-size-tiny;

    p {
      font-weight: 600;
      margin-bottom: $small-gap / 2;
    }

    ul {
      list-style: none;
      display: flex;
      flex-wrap: wrap;

      @media (max-width: $breakpoint) {
        flex-direction: column;
        align-items: flex-start;
      }
    }

    li {
      display: flex;
      align-items: center;
      background: rgba(0, 0, 0, 0.1);
      border-radius: $border-radius;
      padding: $small-gap / 3 $small-gap / 1.5;
      margin-bottom: $small-gap / 3;

      &:not(:last-child) {
        margin-right: $small-gap / 3;
      }
    }

    svg {
      width: 12px;
      height: 12px;
      margin-right: $small-gap / 3;
    }
  }

  .party-theses-list {
    margin: $small-gap / 2 0 $base-gap 0;
    list-style: none;
    border-bottom: 4px solid $transparent-white;

    .list-header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      flex-direction: row;
      background: $background-secondary;
      border-radius: $border-radius;
      box-shadow: $button-shadow;
      padding: $small-gap;

      h2 {
        flex: 1 0 $table-column-small;
        font-size: $font-size-base;
        margin: 0;
        text-align: center;
      }

      h2:first-of-type {
        flex: 1 0 $table-column-large;
        width: $table-column-large;
        text-align: left;
      }
    }

    li {
      padding: $small-gap;
      display: flex;
      flex-direction: column;
    }

    li:not(:last-child):not(.list-header) {
      border-bottom: 2px dashed $transparent-white;
    }

    .thesis-facts {
      display: flex;
      align-items: stretch;
    }

    .thesis-statement {
      background: $dark-blue;
      border-radius: $border-radius / 4;
      padding: $small-gap;
      margin-top: $base-gap;
      position: relative;

      &::after {
        position: absolute;
        content: "";
        width: 20px;
        height: 20px;
        background: $dark-blue;
        top: 0;
        left: 0;
        transform: translate(30px, -50%) rotate(45deg);
      }
    }

    .list-thesis {
      flex: 1 0 $table-column-large;
      padding-right: $small-gap;
      cursor: pointer;

      &:hover svg {
        stroke: $text-color-special;
      }

      span {
        color: $text-color-secondary;
        display: inline-block;
        font-weight: 700;
      }

      svg {
        margin-right: $small-gap / 2;
        stroke: $text-color-secondary;
        transition: stroke 150ms $easeOutBack;
      }

      .thesis-subline {
        display: flex;
        align-items: center;
        margin-bottom: $small-gap / 2;
      }
    }

    .statements-party,
    .statements-user {
      flex: 1 0 $table-column-small;
      display: flex;
      justify-content: center;
      align-items: center;
    }

    .statements-party {
      background: rgba(255, 255, 255, 0.1);
      border-radius: $border-radius;
    }
  }
</style>
