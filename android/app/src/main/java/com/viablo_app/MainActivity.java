package com.viablo_app;

import com.facebook.react.ReactActivity;
<<<<<<< HEAD

=======
 import com.facebook.react.ReactActivityDelegate;
 import com.facebook.react.ReactRootView;
 import com.swmansion.gesturehandler.react.RNGestureHandlerEnabledRootView;
>>>>>>> a8eb1fdf7a8096b57c60da504e764db8933cf524
public class MainActivity extends ReactActivity {

  /**
   * Returns the name of the main component registered from JavaScript. This is used to schedule
   * rendering of the component.
   */
  @Override
  protected String getMainComponentName() {
    return "viablo_app";
  }
<<<<<<< HEAD
=======
  @Override
  protected ReactActivityDelegate createReactActivityDelegate() {
  return new ReactActivityDelegate(this, getMainComponentName()) {
      @Override
     protected ReactRootView createRootView() {
       return new RNGestureHandlerEnabledRootView(MainActivity.this);
      }
    };
  }
>>>>>>> a8eb1fdf7a8096b57c60da504e764db8933cf524
}
