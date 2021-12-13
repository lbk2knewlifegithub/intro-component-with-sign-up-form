import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'lbk-signup-page',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div
      class="relative h-screen w-full bg-fill grid place-items-center place-content-center"
    >
      <!-- background image mobile -->
      <img
        class="background lg:hidden"
        src="/assets/images/bg-intro-mobile.png"
        alt="Intro mobile"
      />
      <!-- end background image mobile-->

      <!-- background image desktop -->
      <img
        class="background hidden lg:block"
        src="/assets/images/bg-intro-desktop.png"
        alt="Intro desktop"
      />
      <!-- end background image desktop-->

      <div
        class="container z-50 grid gap-16 lg:grid-cols-2"
      >
        <!-- text -->
        <div
          class="grid max-w-xl place-items-center place-content-center lg:place-items-start"
        >
          <h1
            class="text-3xl font-heading font-black text-center text-white md:text-4xl lg:text-left lg:text-5xl"
          >
            Learn to code by watching others
          </h1>

          <p class="mt-6 font-medium text-center text-white lg:text-left">
            See how experienced developers solve problems in real-time. Watching
            scripted tutorials is great, but understaning how developers think
            is invaluable.
          </p>
        </div>
        <!-- end text -->

        <div class="grid gap-6">
          <!-- try button -->
            <div class="w-full btn btn-primary">
              <strong class="font-black">Try it free 7 days </strong>
              <span class="text-gray-200 font-thin"
                >then <br class="sm:hidden" />
                $20/mo. thereafter.</span
              >
            </div>
          <!-- end try button -->

          <!-- sign up form -->
          <lbk-signup-form class="block w-full"></lbk-signup-form>
          <!-- end sign up form -->
        </div>
      </div>
    </div>
  `,
})
export class SignupPageComponent {}
