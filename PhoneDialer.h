//
//  PhoneDialer.h
//
//  Created by Justin McNally on 11/17/11.
//  Copyright (c) 2011 Kohactive. All rights reserved.
//

#import <Foundation/Foundation.h>
#import <PhoneGap/PGPlugin.h>

@interface PhoneDialer : PGPlugin

- (void) dialPhone:(NSMutableArray *)arguments withDict:(NSMutableDictionary *) options;

@end

