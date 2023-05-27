<template>
  <div class="wc-dashboard">
    <h1 class="wc-header">We make creative media that <span>adds value</span></h1>
    <div class="wc-cards">
      <div class="base-card">
        <div class="section-left">
          <div
            class="base-card-image-top"
            style="background: url('/src/assets/images/image1.svg')"
          />
          <div
            class="base-card-image-bottom"
            style="background: url('/src/assets/images/image2.svg')"
          />
        </div>
        <div class="section-right">
          <div class="base-card-content">
            <p class="content-heading">Photography</p>
            <ul class="content-list">
              <li>Drone Photography</li>
              <li>Interiors</li>
              <li>Exteriors / Architectural</li>
            </ul>
            <p class="content-body">
              Every photograph we produce finds the beauty in your property.
            </p>
          </div>
        </div>
      </div>
      <div class="base-card">
        <div class="section-left">
          <div class="base-card-image" style="background: url('/src/assets/images/image3.svg')" />
        </div>
        <div class="section-right">
          <div class="base-card-content">
            <p class="content-heading">Virtual Staging</p>
            <p class="content-body">Our staging will help you sell the potential of your space.</p>
            <p class="content-body">
              We can work off of our own photography or photos you provide.
            </p>
          </div>
        </div>
      </div>
      <div class="base-card">
        <div class="section-left">
          <div class="base-card-image" style="background: url('/src/assets/images/image4.png')" />
        </div>
        <div class="section-right">
          <div class="base-card-content">
            <p class="content-heading">Renderings</p>
            <ul class="content-list">
              <li>Interiors</li>
              <li>Exteriors</li>
            </ul>
            <p class="content-body">
              Renderings are the gold standard in pre-construction marketing.
            </p>
          </div>
        </div>
      </div>
      <div class="base-card">
        <div class="section-left">
          <div class="base-card-image" style="background: url('/src/assets/images/image5.svg')" />
        </div>
        <div class="section-right">
          <div class="base-card-content">
            <p class="content-heading">Interactive Tours</p>
            <ul class="content-list">
              <li>Matterport</li>
              <li>Video Walkthroughs</li>
            </ul>
            <p class="content-body">
              Give your audience the ability to explore your property without requiring in-person
              travel.
            </p>
          </div>
        </div>
      </div>
      <div class="base-card">
        <div class="section-left">
          <div class="base-card-image" style="background: url('/src/assets/images/image6.svg')" />
        </div>
        <div class="section-right">
          <div class="base-card-content">
            <p class="content-heading">Floor Plans</p>
            <ul class="content-list">
              <li>On-site Measure</li>
              <li>2D Floor Plans</li>
              <li>3D Floor Plans</li>
            </ul>
            <p class="content-body">
              We produce laser-precise floor plans faster than any other service.
            </p>
          </div>
        </div>
      </div>
      <div class="base-card">
        <div class="section-left">
          <div class="base-card-image" style="background: url('/src/assets/images/image7.svg')" />
        </div>
        <div class="section-right">
          <div class="base-card-content">
            <p class="content-heading">Video</p>
            <ul class="content-list">
              <li>Drone Cinematography</li>
              <li>Interiors</li>
              <li>Exteriors / Architectural</li>
            </ul>
            <p class="content-body">
              Video content has higher engagement and will help your property stand out online.
            </p>
          </div>
        </div>
      </div>
    </div>
    <button class="mb-button mb-size-xl mb-priority-primary">
      <span class="mb-button-label">GET STARTED</span>
    </button>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
.wc-dashboard {
  @apply flex items-center flex-col m-[108px];
  .wc-header {
    @apply font-bold text-[56px] max-w-[730px] text-center;
    span {
      @apply text-[#506BCA];
    }
  }
  .wc-cards {
    @apply flex flex-wrap justify-center gap-7 my-20;
    .base-card {
      @apply grid grid-cols-12 bg-white h-[336px] w-[438px] rounded-lg;
      .section {
        &-left {
          @apply col-span-5;
          .base-card-image {
            @apply w-full h-full rounded-tl-lg;
            &-top {
              @apply w-full h-1/2 rounded-tl-lg;
            }
            &-bottom {
              @apply w-full h-1/2 rounded-bl-lg;
            }
          }
        }
        &-right {
          @apply col-span-7;
          .base-card-content {
            @apply mt-10 mx-8 text-[#353844];
            .content {
              &-heading {
                @apply font-bold text-2xl;
              }
              &-list {
                @apply -ml-7 text-base font-bold;
                li::marker {
                  color: #d2ad81;
                  content: '• ';
                  font-size: 1.2em;
                }
              }
              &-body {
                @apply mt-2 text-base font-medium;
              }
            }
          }
        }
      }
    }
  }
  .mb-button {
    @apply max-w-sm inline-block items-center ml-1 border font-medium shadow-sm self-center align-bottom focus:outline-none;
    &-label {
      @apply self-center truncate;
    }
    &.mb-size {
      &-xl {
        @apply px-14 py-4 text-xl rounded-md focus:ring-2;
      }
    }
    &.mb-priority {
      &-primary {
        @apply border-transparent text-white bg-[#1B264F] focus:bg-[#1B264F] focus:ring-[#1B264F] focus:ring-opacity-20;
        &:enabled {
          @apply hover:bg-[#1B264F];
        }
        .mb-is-loading {
          span {
            @apply text-white;
          }
        }
      }
    }
  }
}
</style>
