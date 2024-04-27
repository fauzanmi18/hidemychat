<template>
    <div class="flex flex-col items-center mx-4">
        <div class="mx-4 mb-4 flex lg:flex-row flex-col gap-2 w-full">
            <div class="p-4 bg-white flex flex-col rounded-lg w-full lg:w-1/2">
                <div class="py-[2px] flex justify-between items-center mb-2">
                    <h1 class="text-base text-gray-700 font-poppins font-medium">
                        Input Your Chat
                    </h1>
                </div>
                <textarea v-model="inputChat" class="border rounded-lg p-4" rows="7"></textarea>
            </div>

            <div class="p-4 bg-white flex flex-col rounded-lg w-full lg:w-1/2">
                <div class="flex justify-between items-center mb-2">
                    <h1 class="text-base text-gray-700 font-poppins font-medium">
                        Revealed Chat
                    </h1>

                    <button @click="copyToClipboard" class="bg-gray-950 h-7 w-14 rounded-lg text-sm text-white">
                        {{ isCopied ? 'Copied!' : 'Copy' }}
                    </button>
                </div>
                <textarea v-model="hiddenChat" ref="hideChatTextArea" class="bg-white border rounded-lg p-4" rows="7" readonly></textarea>
            </div>
        </div>
        <button @click="hideChat" id="hideBtn">
            Hide Chat
        </button>
    </div>
</template>

<script setup>
import { ref } from 'vue'

const inputChat = ref('')
const hiddenChat = ref('')
const isCopied = ref(false)
const hideChatTextArea = ref(null)

const hideChat = () => {
    if(inputChat.value?.length > 0 || inputChat.value.trim() !== ''){
        console.log(btoa(inputChat.value))
        hiddenChat.value = btoa(inputChat.value)

        const textarea = hideChatTextArea.value;
        textarea.focus();
    }
}

const copyToClipboard = () => {
    if(hiddenChat.value?.length > 0 || hiddenChat.value.trim() !== ''){
        isCopied.value = true

        const textarea = document.createElement('textarea');
        textarea.value = hiddenChat.value;
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand('copy');
        document.body.removeChild(textarea);

        setTimeout(() => {
            isCopied.value = false
        }, 1000);

    }
};
</script>

<style scoped>
#hideBtn {
 appearance: none;
 background-color: #1A1A1A;
 border: 0.125em solid #1A1A1A;
 border-radius: 0.9375em;
 box-sizing: border-box;
 color: #fff;
 cursor: pointer;
 display: inline-block;
 font-family: Roobert,-apple-system,BlinkMacSystemFont,"Segoe UI",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol";
 font-size: 16px;
 font-weight: 600;
 line-height: normal;
 margin: 0;
 min-height: 44px;
 min-width: 0;
 outline: none;
 padding: 12px;
 text-align: center;
 text-decoration: none;
 transition: all 300ms cubic-bezier(.23, 1, 0.32, 1);
 user-select: none;
 -webkit-user-select: none;
 touch-action: manipulation;
 will-change: transform;
}

button:disabled {
 pointer-events: none;
}

button:hover {
 color: #fff;
 background-color: #1A1A1A;
 box-shadow: rgba(0, 0, 0, 0.25) 0 8px 15px;
 transform: translateY(-2px);
}

button:active {
 box-shadow: none;
 transform: translateY(0);
}
</style>