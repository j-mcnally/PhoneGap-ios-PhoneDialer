//
//  PhoneDialer.m
//
//  Created by Justin McNally on 11/17/11.
//  Copyright (c) 2011 Kohactive. All rights reserved.
//

#import "PhoneDialer.h"



@implementation PhoneDialer



- (void) dialPhone:(NSMutableArray *)arguments withDict:(NSMutableDictionary *)options {
    
    NSString* ph = [options valueForKey:@"number"];
    
    UIDevice *device = [UIDevice currentDevice];
    if ([[device model] isEqualToString:@"iPhone"] ) {
        [[UIApplication sharedApplication] openURL:[NSURL URLWithString:[NSString stringWithFormat:@"tel:%@", ph]]];
    } else {
        UIAlertView *Notpermitted=[[UIAlertView alloc] initWithTitle:@"Alert" message:@"Your device doesn't support this feature." delegate:nil cancelButtonTitle:@"OK" otherButtonTitles:nil];
        [Notpermitted show];
        [Notpermitted release];
    }
    
}

@end
