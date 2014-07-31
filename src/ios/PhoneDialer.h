//
//  PhoneDialer.h
//
//  Created by Justin McNally on 11/17/11.
//  Copyright (c) 2011 Kohactive. All rights reserved.


#import <Cordova/CDVPlugin.h>

@interface PhoneDialer : CDVPlugin

- (void)dial:(CDVInvokedUrlCommand*)command;

@end