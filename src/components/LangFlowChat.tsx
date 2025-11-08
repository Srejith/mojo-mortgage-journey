/* eslint-disable @typescript-eslint/no-namespace, @typescript-eslint/no-explicit-any */
"use client";
import React, { useEffect } from 'react';
import { langFlowChat } from '@/data/langflowchat';

interface LangflowChatProps {
  host_url?: string;
  flow_id?: string;
  api_key?: string;
  chat_position?: string;
  width?: number;
  height?: number;
  start_open?: boolean;
  placeholder?: string;
  style?: React.CSSProperties;
  window_title?: string;
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements {
      'langflow-chat': LangflowChatProps;
    }
  }
}

// LangFlowChat dynamically loads the remote script once and embeds its custom element

const LangFlowChat = () => {
  useEffect(() => {
    if (!document.getElementById('langflow-chat-script')) {
      const script = document.createElement('script');
      script.id = 'langflow-chat-script';
      script.src = 'https://cdn.jsdelivr.net/gh/langflow-ai/langflow-embedded-chat@main/dist/build/static/js/bundle.min.js';
      script.async = true;
      document.body.appendChild(script);
    }
  }, []);

  return (
    <div className="fgrid place-items-center">
      <langflow-chat
        host_url={langFlowChat.hostUrl}
        flow_id={langFlowChat.flowId}
        chat_position={"top-right"}
        start_open={true}
        width={800}
        height={500}
        placeholder={"I'm looking to buy a house for £500,000. I can put in a deposit of £40K. Am I eligible for mortgage?"}
        style={{ width: '100%', height: '400px' }}
        window_title={"Ask us anything about buying a house. We are here to help you."}
      ></langflow-chat>
    </div>
  );
};


export default LangFlowChat;
