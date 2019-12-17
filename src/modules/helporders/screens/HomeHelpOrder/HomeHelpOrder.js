import React from 'react'
import { View, Text, FlatList } from 'react-native'
import { styles } from './HomeHelpOrder.style'
import { contentWrapper } from '../../../../styles/reusable'
import { CustomStatusBar, BottomNav, Header, Button } from '../../../../components'
import { ListHelpOrder } from '../../components'

const HomeHelpOrder = () => {

    const helporderList = [
        {
            id: 1,
            question: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras aliquet sed odio vel molestie. Proin fringilla erat id ultricies tristique. Pellentesque a rutrum diam. Pellentesque ut neque non nulla faucibus fermentum. Integer facilisis aliquet tincidunt. Suspendisse et tempor tellus. Vivamus vulputate, sem a vulputate tristique, eros tellus tincidunt leo, ut feugiat velit sem non diam. Nullam cursus fermentum lorem, in mattis sapien egestas iaculis. Praesent malesuada massa libero, ac eleifend lorem sollicitudin vehicula. Cras consequat libero eu orci lacinia, eu fermentum ligula blandit. Sed risus arcu, suscipit in risus rhoncus, interdum mattis lacus. Etiam ut consectetur tellus, vel condimentum eros. Maecenas in condimentum dolor. Nunc euismod luctus pharetra. Aenean tincidunt efficitur mattis. Aliquam quis massa vel velit dictum bibendum eget ut libero.'
        },
        {
            id: 2,
            question: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras aliquet sed odio vel molestie. Proin fringilla erat id ultricies tristique. Pellentesque a rutrum diam. Pellentesque ut neque non nulla faucibus fermentum. Integer facilisis aliquet tincidunt. Suspendisse et tempor tellus. Vivamus vulputate, sem a vulputate tristique, eros tellus tincidunt leo, ut feugiat velit sem non diam. Nullam cursus fermentum lorem, in mattis sapien egestas iaculis. Praesent malesuada massa libero, ac eleifend lorem sollicitudin vehicula. Cras consequat libero eu orci lacinia, eu fermentum ligula blandit. Sed risus arcu, suscipit in risus rhoncus, interdum mattis lacus. Etiam ut consectetur tellus, vel condimentum eros. Maecenas in condimentum dolor. Nunc euismod luctus pharetra. Aenean tincidunt efficitur mattis. Aliquam quis massa vel velit dictum bibendum eget ut libero.'
        },
        {
            id: 3,
            question: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras aliquet sed odio vel molestie. Proin fringilla erat id ultricies tristique. Pellentesque a rutrum diam. Pellentesque ut neque non nulla faucibus fermentum. Integer facilisis aliquet tincidunt. Suspendisse et tempor tellus. Vivamus vulputate, sem a vulputate tristique, eros tellus tincidunt leo, ut feugiat velit sem non diam. Nullam cursus fermentum lorem, in mattis sapien egestas iaculis. Praesent malesuada massa libero, ac eleifend lorem sollicitudin vehicula. Cras consequat libero eu orci lacinia, eu fermentum ligula blandit. Sed risus arcu, suscipit in risus rhoncus, interdum mattis lacus. Etiam ut consectetur tellus, vel condimentum eros. Maecenas in condimentum dolor. Nunc euismod luctus pharetra. Aenean tincidunt efficitur mattis. Aliquam quis massa vel velit dictum bibendum eget ut libero.'
        },
        {
            id: 4,
            question: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras aliquet sed odio vel molestie. Proin fringilla erat id ultricies tristique. Pellentesque a rutrum diam. Pellentesque ut neque non nulla faucibus fermentum. Integer facilisis aliquet tincidunt. Suspendisse et tempor tellus. Vivamus vulputate, sem a vulputate tristique, eros tellus tincidunt leo, ut feugiat velit sem non diam. Nullam cursus fermentum lorem, in mattis sapien egestas iaculis. Praesent malesuada massa libero, ac eleifend lorem sollicitudin vehicula. Cras consequat libero eu orci lacinia, eu fermentum ligula blandit. Sed risus arcu, suscipit in risus rhoncus, interdum mattis lacus. Etiam ut consectetur tellus, vel condimentum eros. Maecenas in condimentum dolor. Nunc euismod luctus pharetra. Aenean tincidunt efficitur mattis. Aliquam quis massa vel velit dictum bibendum eget ut libero.'
        },
        {
            id: 5,
            question: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras aliquet sed odio vel molestie. Proin fringilla erat id ultricies tristique. Pellentesque a rutrum diam. Pellentesque ut neque non nulla faucibus fermentum. Integer facilisis aliquet tincidunt. Suspendisse et tempor tellus. Vivamus vulputate, sem a vulputate tristique, eros tellus tincidunt leo, ut feugiat velit sem non diam. Nullam cursus fermentum lorem, in mattis sapien egestas iaculis. Praesent malesuada massa libero, ac eleifend lorem sollicitudin vehicula. Cras consequat libero eu orci lacinia, eu fermentum ligula blandit. Sed risus arcu, suscipit in risus rhoncus, interdum mattis lacus. Etiam ut consectetur tellus, vel condimentum eros. Maecenas in condimentum dolor. Nunc euismod luctus pharetra. Aenean tincidunt efficitur mattis. Aliquam quis massa vel velit dictum bibendum eget ut libero.'
        },
        {
            id: 6,
            question: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras aliquet sed odio vel molestie. Proin fringilla erat id ultricies tristique. Pellentesque a rutrum diam. Pellentesque ut neque non nulla faucibus fermentum. Integer facilisis aliquet tincidunt. Suspendisse et tempor tellus. Vivamus vulputate, sem a vulputate tristique, eros tellus tincidunt leo, ut feugiat velit sem non diam. Nullam cursus fermentum lorem, in mattis sapien egestas iaculis. Praesent malesuada massa libero, ac eleifend lorem sollicitudin vehicula. Cras consequat libero eu orci lacinia, eu fermentum ligula blandit. Sed risus arcu, suscipit in risus rhoncus, interdum mattis lacus. Etiam ut consectetur tellus, vel condimentum eros. Maecenas in condimentum dolor. Nunc euismod luctus pharetra. Aenean tincidunt efficitur mattis. Aliquam quis massa vel velit dictum bibendum eget ut libero.'
        },
        {
            id: 7,
            question: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras aliquet sed odio vel molestie. Proin fringilla erat id ultricies tristique. Pellentesque a rutrum diam. Pellentesque ut neque non nulla faucibus fermentum. Integer facilisis aliquet tincidunt. Suspendisse et tempor tellus. Vivamus vulputate, sem a vulputate tristique, eros tellus tincidunt leo, ut feugiat velit sem non diam. Nullam cursus fermentum lorem, in mattis sapien egestas iaculis. Praesent malesuada massa libero, ac eleifend lorem sollicitudin vehicula. Cras consequat libero eu orci lacinia, eu fermentum ligula blandit. Sed risus arcu, suscipit in risus rhoncus, interdum mattis lacus. Etiam ut consectetur tellus, vel condimentum eros. Maecenas in condimentum dolor. Nunc euismod luctus pharetra. Aenean tincidunt efficitur mattis. Aliquam quis massa vel velit dictum bibendum eget ut libero.'
        },
        {
            id: 8,
            question: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras aliquet sed odio vel molestie. Proin fringilla erat id ultricies tristique. Pellentesque a rutrum diam. Pellentesque ut neque non nulla faucibus fermentum. Integer facilisis aliquet tincidunt. Suspendisse et tempor tellus. Vivamus vulputate, sem a vulputate tristique, eros tellus tincidunt leo, ut feugiat velit sem non diam. Nullam cursus fermentum lorem, in mattis sapien egestas iaculis. Praesent malesuada massa libero, ac eleifend lorem sollicitudin vehicula. Cras consequat libero eu orci lacinia, eu fermentum ligula blandit. Sed risus arcu, suscipit in risus rhoncus, interdum mattis lacus. Etiam ut consectetur tellus, vel condimentum eros. Maecenas in condimentum dolor. Nunc euismod luctus pharetra. Aenean tincidunt efficitur mattis. Aliquam quis massa vel velit dictum bibendum eget ut libero.'
        },
        {
            id: 9,
            question: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras aliquet sed odio vel molestie. Proin fringilla erat id ultricies tristique. Pellentesque a rutrum diam. Pellentesque ut neque non nulla faucibus fermentum. Integer facilisis aliquet tincidunt. Suspendisse et tempor tellus. Vivamus vulputate, sem a vulputate tristique, eros tellus tincidunt leo, ut feugiat velit sem non diam. Nullam cursus fermentum lorem, in mattis sapien egestas iaculis. Praesent malesuada massa libero, ac eleifend lorem sollicitudin vehicula. Cras consequat libero eu orci lacinia, eu fermentum ligula blandit. Sed risus arcu, suscipit in risus rhoncus, interdum mattis lacus. Etiam ut consectetur tellus, vel condimentum eros. Maecenas in condimentum dolor. Nunc euismod luctus pharetra. Aenean tincidunt efficitur mattis. Aliquam quis massa vel velit dictum bibendum eget ut libero.'
        },
        {
            id: 10,
            question: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras aliquet sed odio vel molestie. Proin fringilla erat id ultricies tristique. Pellentesque a rutrum diam. Pellentesque ut neque non nulla faucibus fermentum. Integer facilisis aliquet tincidunt. Suspendisse et tempor tellus. Vivamus vulputate, sem a vulputate tristique, eros tellus tincidunt leo, ut feugiat velit sem non diam. Nullam cursus fermentum lorem, in mattis sapien egestas iaculis. Praesent malesuada massa libero, ac eleifend lorem sollicitudin vehicula. Cras consequat libero eu orci lacinia, eu fermentum ligula blandit. Sed risus arcu, suscipit in risus rhoncus, interdum mattis lacus. Etiam ut consectetur tellus, vel condimentum eros. Maecenas in condimentum dolor. Nunc euismod luctus pharetra. Aenean tincidunt efficitur mattis. Aliquam quis massa vel velit dictum bibendum eget ut libero.'
        },
        {
            id: 11,
            question: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras aliquet sed odio vel molestie. Proin fringilla erat id ultricies tristique. Pellentesque a rutrum diam. Pellentesque ut neque non nulla faucibus fermentum. Integer facilisis aliquet tincidunt. Suspendisse et tempor tellus. Vivamus vulputate, sem a vulputate tristique, eros tellus tincidunt leo, ut feugiat velit sem non diam. Nullam cursus fermentum lorem, in mattis sapien egestas iaculis. Praesent malesuada massa libero, ac eleifend lorem sollicitudin vehicula. Cras consequat libero eu orci lacinia, eu fermentum ligula blandit. Sed risus arcu, suscipit in risus rhoncus, interdum mattis lacus. Etiam ut consectetur tellus, vel condimentum eros. Maecenas in condimentum dolor. Nunc euismod luctus pharetra. Aenean tincidunt efficitur mattis. Aliquam quis massa vel velit dictum bibendum eget ut libero.'
        },
        {
            id: 12,
            question: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras aliquet sed odio vel molestie. Proin fringilla erat id ultricies tristique. Pellentesque a rutrum diam. Pellentesque ut neque non nulla faucibus fermentum. Integer facilisis aliquet tincidunt. Suspendisse et tempor tellus. Vivamus vulputate, sem a vulputate tristique, eros tellus tincidunt leo, ut feugiat velit sem non diam. Nullam cursus fermentum lorem, in mattis sapien egestas iaculis. Praesent malesuada massa libero, ac eleifend lorem sollicitudin vehicula. Cras consequat libero eu orci lacinia, eu fermentum ligula blandit. Sed risus arcu, suscipit in risus rhoncus, interdum mattis lacus. Etiam ut consectetur tellus, vel condimentum eros. Maecenas in condimentum dolor. Nunc euismod luctus pharetra. Aenean tincidunt efficitur mattis. Aliquam quis massa vel velit dictum bibendum eget ut libero.'
        },
        {
            id: 13,
            question: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras aliquet sed odio vel molestie. Proin fringilla erat id ultricies tristique. Pellentesque a rutrum diam. Pellentesque ut neque non nulla faucibus fermentum. Integer facilisis aliquet tincidunt. Suspendisse et tempor tellus. Vivamus vulputate, sem a vulputate tristique, eros tellus tincidunt leo, ut feugiat velit sem non diam. Nullam cursus fermentum lorem, in mattis sapien egestas iaculis. Praesent malesuada massa libero, ac eleifend lorem sollicitudin vehicula. Cras consequat libero eu orci lacinia, eu fermentum ligula blandit. Sed risus arcu, suscipit in risus rhoncus, interdum mattis lacus. Etiam ut consectetur tellus, vel condimentum eros. Maecenas in condimentum dolor. Nunc euismod luctus pharetra. Aenean tincidunt efficitur mattis. Aliquam quis massa vel velit dictum bibendum eget ut libero.'
        },
        {
            id: 14,
            question: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras aliquet sed odio vel molestie. Proin fringilla erat id ultricies tristique. Pellentesque a rutrum diam. Pellentesque ut neque non nulla faucibus fermentum. Integer facilisis aliquet tincidunt. Suspendisse et tempor tellus. Vivamus vulputate, sem a vulputate tristique, eros tellus tincidunt leo, ut feugiat velit sem non diam. Nullam cursus fermentum lorem, in mattis sapien egestas iaculis. Praesent malesuada massa libero, ac eleifend lorem sollicitudin vehicula. Cras consequat libero eu orci lacinia, eu fermentum ligula blandit. Sed risus arcu, suscipit in risus rhoncus, interdum mattis lacus. Etiam ut consectetur tellus, vel condimentum eros. Maecenas in condimentum dolor. Nunc euismod luctus pharetra. Aenean tincidunt efficitur mattis. Aliquam quis massa vel velit dictum bibendum eget ut libero.'
        },
    ]

    return (
        <>
            <CustomStatusBar />

            <Header />

            <View style={styles.content}>
                <View style={contentWrapper}>

                    <Button text="Novo pedido de auxílio" onPress={() => {}} />

                    <FlatList
                        style={{ marginVertical: 20, paddingRight: 10 }}
                        data={helporderList}
                        keyExtractor={item => item.id}
                        renderItem={({ item }) => <ListHelpOrder id={item.id} question={item.question}/> }
                    />
                </View>
            </View>

            <BottomNav />
        </>
    )
}

export { HomeHelpOrder }