import * as vscode from 'vscode';
import ADBNTelemetry from '../../helper/telemetry';

export function loadLWCSnippets( context:vscode.ExtensionContext ) {

    let lwcSnippets = [
        {
            label: "input:text-lwc",
            insertText: new vscode.SnippetString(
                "<lightning-input type=\"text\" name=\"${1:input1}\" label=\"${2:label}\" placeholder=\"${3:type here...} \"></lightning-input>"
            ),
            detail: "Text input fields are for entering single-line text.",
            kind: vscode.CompletionItemKind.Snippet,
        },
        {
            label: "input:number-lwc",
            insertText: new vscode.SnippetString(
                "<lightning-input type=\"number\" name=\"${1:input1}\" label=\"${2:label}\" placeholder=\"${3:enter number...} \"></lightning-input>"
            ),
            detail: "Number input fields support decimal, percentage, and currency values.",
            kind: vscode.CompletionItemKind.Snippet,
        },
        {
            label: "input:search-lwc",
            insertText: new vscode.SnippetString(
                "<div onkeyup={handleKeyUp}>\n\t<lightning-input\n\t\tname=\"${1:fieldName}\"\n\t\tlabel=\"${2:Search}\"\n\t\ttype=\"search\">\n\t</lightning-input>\n</div>"
            ),
            detail: "Search input fields enable search queries",
            kind: vscode.CompletionItemKind.Snippet,
        },
        {
            label: "input:date-lwc",
            insertText: new vscode.SnippetString(
                "<lightning-input type=\"date\" name=\"${1:input1}\" label=\"${2:Date}\" value=\"${3:2020-12-31}\"></lightning-input>"
            ),
            detail: "Date input fields provide a date picker for entering a date.",
            kind: vscode.CompletionItemKind.Snippet,
        },
        {
            label: "input:time-lwc",
            insertText: new vscode.SnippetString(
                "<lightning-input type=\"time\" name=\"${1:input1}\" label=\"${2:Time}\" value=\"${3:2020-12-31}\"></lightning-input>"
            ),
            detail: "Time input fields provide a dropdown list of time values",
            kind: vscode.CompletionItemKind.Snippet,
        },
        {
            label: "input:datetime-lwc",
            insertText: new vscode.SnippetString(
                "<lightning-input type=\"datetime\" name=\"${1:input1}\" label=\"${2:Date Time}\" value=\"${3:2000-12-31T23:59:59Z}\"></lightning-input>"
            ),
            detail: "Date/Time input fields provide a date and time picker for entering a date and time.",
            kind: vscode.CompletionItemKind.Snippet,
        },
        {
            label: "input:file-lwc",
            insertText: new vscode.SnippetString(
                "<lightning-input type=\"file\" name=\"${1:input1}\"  label=\"${2:Attachment}\" multiple=\"${3|true,false|}\" accept=\"${4:}\" onchange=\"{! c.${5:handleFilesChange} }\"/></lightning-input>"
            ),
            detail: "File input fields support upload of single or multiple files and can restrict the accepted file types",
            kind: vscode.CompletionItemKind.Snippet,
        },
        {
            label: "input:email-lwc",
            insertText: new vscode.SnippetString(
                "<lightning-input type=\"email\" name=\"${1:input1}\" label=\"${2:Email}\" value=\"${3:abc@domain.com}\"  placeholder=\"${4:youraddress@company.com}\"></lightning-input>"
            ),
            detail: "Email input fields are for entering email addresses",
            kind: vscode.CompletionItemKind.Snippet,
        },
        {
            label: "input:password-lwc",
            insertText: new vscode.SnippetString(
                "<lightning-input type=\"password\" name=\"${1:input1}\" label=\"${2:label}\" placeholder=\"${3:Enter Password...} \"></lightning-input>"
            ),
            detail: "Password input fields obscure your text input",
            kind: vscode.CompletionItemKind.Snippet,
        },
        {
            label: "input:checkbox-lwc",
            insertText: new vscode.SnippetString(
                "<lightning-input type=\"checkbox\" label=\"${1:label}\" name=\"${2:name}\" ${3:checked} ${4:required} ${5:disabled}></lightning-input>"
            ),
            detail: "Checkbox options can be required or disabled.",
            kind: vscode.CompletionItemKind.Snippet,
        },
        {
            label: "combobox-lwc",
            insertText: new vscode.SnippetString(
                "<lightning-combobox\n\tname=\"${1:name}\"\n\tlabel=\"${2:label}\"\n\tvalue=\"\"\n\tplaceholder=\"${3:placeholder}\"\n\toptions={options}\n\tonchange={handleChange}\n\trequired\n></lightning-combobox>"
            ),
            detail: "A combobox enables you to select only one option",
            kind: vscode.CompletionItemKind.Snippet,
        },
        {
            label: "card:basic-lwc",
            insertText: new vscode.SnippetString(
                "<lightning-card title=\"${1:title}\">\n\t<p class=\"slds-p-horizontal_small\">\n\t\t${2:Card Body}\n\t</p>\n\t<p slot=\"footer\">\n\t\t${3:Card Footer}\n\t</p>\n</lightning-card>",
            ),
            detail: "LWC Basic Card",
            kind: vscode.CompletionItemKind.Snippet,
        },
        {
            label: "icon:lwc",
            insertText: new vscode.SnippetString(
                "<lightning-icon icon-name=\"${1|utility:activity,utility:ad_set,utility:add,utility:adduser,utility:advanced_function,utility:advertising,utility:agent_session,utility:alert,utility:all,utility:anchor,utility:animal_and_nature,utility:announcement,utility:answer,utility:answered_twice,utility:apex_plugin,utility:apex,utility:approval,utility:apps,utility:archive,utility:arrowdown,utility:arrowup,utility:assignment,utility:attach,utility:automate,utility:away,utility:back,utility:ban,utility:block_visitor,utility:bold,utility:bookmark,utility:breadcrumbs,utility:broadcast,utility:brush,utility:bucket,utility:builder,utility:button_choice,utility:call,utility:campaign,utility:cancel_file_request,utility:cancel_transfer,utility:capslock,utility:cart,utility:case,utility:cases,utility:center_align_text,utility:change_owner,utility:change_record_type,utility:chart,utility:chat,utility:check,utility:checkin,utility:chevrondown,utility:chevronleft,utility:chevronright,utility:chevronup,utility:choice,utility:classic_interface,utility:clear,utility:clock,utility:close,utility:collapse_all,utility:collection_variable,utility:color_swatch,utility:comments,utility:company,utility:component_customization,utility:connected_apps,utility:constant,utility:contact_request,utility:contract_alt,utility:contract,utility:copy_to_clipboard,utility:copy,utility:crossfilter,utility:currency_input,utility:currency,utility:custom_apps,utility:cut,utility:dash,utility:database,utility:datadotcom,utility:date_input,utility:date_time,utility:dayview,utility:delete,utility:deprecate,utility:description,utility:desktop_and_phone,utility:desktop_console,utility:desktop,utility:dialing,utility:diamond,utility:dislike,utility:display_rich_text,utility:display_text,utility:dock_panel,utility:down,utility:download,utility:drag_and_drop,utility:drag,utility:dynamic_record_choice,utility:edit_form,utility:edit,utility:education,utility:einstein,utility:email_open,utility:email,utility:emoji,utility:end_call,utility:end_chat,utility:end_messaging_session,utility:engage,utility:enter,utility:erect_window,utility:error,utility:event,utility:events,utility:expand_all,utility:expand_alt,utility:expand,utility:fallback,utility:favorite,utility:feed,utility:file,utility:filter,utility:filterList,utility:flow_alt,utility:flow,utility:food_and_drink,utility:formula,utility:forward_up,utility:forward,utility:frozen,utility:fulfillment_order,utility:full_width_view,utility:global_constant,utility:graph,utility:groups,utility:help_center,utility:help,utility:hide_mobile,utility:hide,utility:hierarchy,utility:high_velocity_sales,utility:home,utility:identity,utility:image,utility:in_app_assistant,utility:inbox,utility:incoming_call,utility:info_alt,utility:info,utility:insert_tag_field,utility:insert_template,utility:inspector_panel,utility:internal_share,utility:italic,utility:jump_to_bottom,utility:jump_to_top,utility:justify_text,utility:kanban,utility:keyboard_dismiss,utility:knowledge_base,utility:layers,utility:layout,utility:leave_conference,utility:left_align_text,utility:left,utility:level_down,utility:level_up,utility:light_bulb,utility:lightning_extension,utility:lightning_inspector,utility:like,utility:link,utility:linked,utility:list,utility:listen,utility:live_message,utility:location,utility:lock,utility:locker_service_api_viewer,utility:locker_service_console,utility:log_a_call,utility:logout,utility:loop,utility:lower_flag,utility:macros,utility:magicwand,utility:mark_all_as_read,utility:matrix,utility:merge_field,utility:merge,utility:metrics,utility:minimize_window,utility:missed_call,utility:money,utility:moneybag,utility:monthlyview,utility:move,utility:multi_picklist,utility:multi_select_checkbox,utility:muted,utility:new_direct_message,utility:new_window,utility:new,utility:news,utility:note,utility:notebook,utility:notification,utility:number_input,utility:office365,utility:offline_cached,utility:offline,utility:omni_channel,utility:open_folder,utility:open,utility:opened_folder,utility:outbound_call,utility:outcome,utility:overflow,utility:package_org_beta,utility:package_org,utility:package,utility:page,utility:palette,utility:password,utility:paste,utility:pause,utility:people,utility:phone_landscape,utility:phone_portrait,utility:photo,utility:picklist_choice,utility:picklist_type,utility:picklist,utility:pin,utility:pinned,utility:play,utility:podcast_webinar,utility:pop_in,utility:power,utility:preview,utility:print,utility:priority,utility:privately_shared,utility:process,utility:prompt_edit,utility:prompt,utility:push,utility:puzzle,utility:question_mark,utility:question,utility:questions_and_answers,utility:quick_text,utility:quip,utility:quotation_marks,utility:quote,utility:radio_button,utility:rating,utility:reassign,utility:record_create,utility:record_delete,utility:record_lookup,utility:record_update,utility:record,utility:recurring_exception,utility:recycle_bin_empty,utility:recycle_bin_full,utility:redo,utility:refresh,utility:relate,utility:reminder,utility:remove_formatting,utility:remove_link,utility:replace,utility:reply_all,utility:reply,utility:report_issue,utility:reset_password,utility:resource_absence,utility:resource_capacity,utility:resource_territory,utility:retail_execution,utility:retweet,utility:ribbon,utility:richtextbulletedlist,utility:richtextindent,utility:richtextnumberedlist,utility:richtextoutdent,utility:right_align_text,utility:right,utility:rotate,utility:routing_offline,utility:rows,utility:rules,utility:salesforce1,utility:save,utility:screen,utility:search,utility:section,utility:send,utility:sentiment_negative,utility:sentiment_neutral,utility:settings,utility:setup_assistant_guide,utility:setup_modal,utility:setup,utility:share_file,utility:share_mobile,utility:share_post,utility:share,utility:shield,utility:shift_ui,utility:shopping_bag,utility:shortcuts,utility:side_list,utility:signpost,utility:skip_back,utility:skip_forward,utility:skip,utility:slider,utility:smiley_and_people,utility:sms,utility:snippet,utility:sobject_collection,utility:sobject,utility:socialshare,utility:sort,utility:spinner,utility:stage_collection,utility:stage,utility:standard_objects,utility:steps,utility:stop,utility:store,utility:strategy,utility:strikethrough,utility:success,utility:summary,utility:summarydetail,utility:survey,utility:switch,utility:symbols,utility:sync,utility:system_and_global_variable,utility:table_settings,utility:table,utility:tablet_landscape,utility:tablet_portrait,utility:tabset,utility:target,utility:task,utility:text_background_color,utility:text_color,utility:text_template,utility:text,utility:textarea,utility:textbox,utility:threedots_vertical,utility:threedots,utility:thunder,utility:tile_card_list,utility:toggle_panel_bottom,utility:toggle_panel_left,utility:toggle_panel_right,utility:toggle_panel_top,utility:toggle,utility:topic,utility:topic2,utility:touch_action,utility:tracker,utility:trail,utility:trailhead,utility:travel_and_places,utility:trending,utility:turn_off_notifications,utility:type_tool,utility:type,utility:undelete,utility:undeprecate,utility:underline,utility:undo,utility:unlinked,utility:unlock,utility:unmuted,utility:up,utility:upload,utility:user_role,utility:user,utility:variable,utility:video,utility:voicemail_drop,utility:volume_high,utility:volume_low,utility:volume_off,utility:waits,utility:warning,utility:watchlist,utility:weeklyview,utility:wifi,utility:work_order_type,utility:world,utility:yubi_key,utility:zoomin,utility:zoomout|}\" alternative-text=\"${2:Title}\" title=\"${2:Title}\" variant=\"${3|Success,warning,error,inverse|}\" size=\"${4|xx-small,x-small,small,medium,large|}\"></lightning-icon>",
            ),
            detail: "LWC Icon",
            kind: vscode.CompletionItemKind.Snippet,
        },
        {
            label: "button:basic-lwc",
            insertText: new vscode.SnippetString(
                "<lightning-button variant=\"${1|base,default,brand,brand-outline,destructive,destructive-text,success|}\" label=\"${2:label}\" title=\"${2:Title}\" onclick={${3:Function Name}}></lightning-button>",
            ),
            detail: "Basic Button LWC",
            kind: vscode.CompletionItemKind.Snippet,
        },
        {
            label: "button:icon-lwc",
            insertText: new vscode.SnippetString(
                "<lightning-button variant=\"${1|base,default,brand,brand-outline,destructive,destructive-text,success|}\" label=\"${2:label}\" title=\"${2:Title}\" onclick={${3:Function Name}} icon-name=\"${4|utility:activity, utility:ad_set, utility:add, utility:adduser, utility:advanced_function, utility:advertising, utility:agent_session, utility:alert, utility:all, utility:anchor, utility:animal_and_nature, utility:announcement, utility:answer, utility:answered_twice, utility:apex_plugin, utility:apex, utility:approval, utility:apps, utility:archive, utility:arrowdown, utility:arrowup, utility:assignment, utility:attach, utility:automate, utility:away, utility:back, utility:ban, utility:block_visitor, utility:bold, utility:bookmark, utility:breadcrumbs, utility:broadcast, utility:brush, utility:bucket, utility:builder, utility:button_choice, utility:call, utility:campaign, utility:cancel_file_request, utility:cancel_transfer, utility:capslock, utility:cart, utility:case, utility:cases, utility:center_align_text, utility:change_owner, utility:change_record_type, utility:chart, utility:chat, utility:check, utility:checkin, utility:chevrondown, utility:chevronleft, utility:chevronright, utility:chevronup, utility:choice, utility:classic_interface, utility:clear, utility:clock, utility:close, utility:collapse_all, utility:collection_variable, utility:color_swatch, utility:comments, utility:company, utility:component_customization, utility:connected_apps, utility:constant, utility:contact_request, utility:contract_alt, utility:contract, utility:copy_to_clipboard, utility:copy, utility:crossfilter, utility:currency_input, utility:currency, utility:custom_apps, utility:cut, utility:dash, utility:database, utility:datadotcom, utility:date_input, utility:date_time, utility:dayview, utility:delete, utility:deprecate, utility:description, utility:desktop_and_phone, utility:desktop_console, utility:desktop, utility:dialing, utility:diamond, utility:dislike, utility:display_rich_text, utility:display_text, utility:dock_panel, utility:down, utility:download, utility:drag_and_drop, utility:drag, utility:dynamic_record_choice, utility:edit_form, utility:edit, utility:education, utility:einstein, utility:email_open, utility:email, utility:emoji, utility:end_call, utility:end_chat, utility:end_messaging_session, utility:engage, utility:enter, utility:erect_window, utility:error, utility:event, utility:events, utility:expand_all, utility:expand_alt, utility:expand, utility:fallback, utility:favorite, utility:feed, utility:file, utility:filter, utility:filterList, utility:flow_alt, utility:flow, utility:food_and_drink, utility:formula, utility:forward_up, utility:forward, utility:frozen, utility:fulfillment_order, utility:full_width_view, utility:global_constant, utility:graph, utility:groups, utility:help_center, utility:help, utility:hide_mobile, utility:hide, utility:hierarchy, utility:high_velocity_sales, utility:home, utility:identity, utility:image, utility:in_app_assistant, utility:inbox, utility:incoming_call, utility:info_alt, utility:info, utility:insert_tag_field, utility:insert_template, utility:inspector_panel, utility:internal_share, utility:italic, utility:jump_to_bottom, utility:jump_to_top, utility:justify_text, utility:kanban, utility:keyboard_dismiss, utility:knowledge_base, utility:layers, utility:layout, utility:leave_conference, utility:left_align_text, utility:left, utility:level_down, utility:level_up, utility:light_bulb, utility:lightning_extension, utility:lightning_inspector, utility:like, utility:link, utility:linked, utility:list, utility:listen, utility:live_message, utility:location, utility:lock, utility:locker_service_api_viewer, utility:locker_service_console, utility:log_a_call, utility:logout, utility:loop, utility:lower_flag, utility:macros, utility:magicwand, utility:mark_all_as_read, utility:matrix, utility:merge_field, utility:merge, utility:metrics, utility:minimize_window, utility:missed_call, utility:money, utility:moneybag, utility:monthlyview, utility:move, utility:multi_picklist, utility:multi_select_checkbox, utility:muted, utility:new_direct_message, utility:new_window, utility:new, utility:news, utility:note, utility:notebook, utility:notification, utility:number_input, utility:office365, utility:offline_cached, utility:offline, utility:omni_channel, utility:open_folder, utility:open, utility:opened_folder, utility:outbound_call, utility:outcome, utility:overflow, utility:package_org_beta, utility:package_org, utility:package, utility:page, utility:palette, utility:password, utility:paste, utility:pause, utility:people, utility:phone_landscape, utility:phone_portrait, utility:photo, utility:picklist_choice, utility:picklist_type, utility:picklist, utility:pin, utility:pinned, utility:play, utility:podcast_webinar, utility:pop_in, utility:power, utility:preview, utility:print, utility:priority, utility:privately_shared, utility:process, utility:prompt_edit, utility:prompt, utility:push, utility:puzzle, utility:question_mark, utility:question, utility:questions_and_answers, utility:quick_text, utility:quip, utility:quotation_marks, utility:quote, utility:radio_button, utility:rating, utility:reassign, utility:record_create, utility:record_delete, utility:record_lookup, utility:record_update, utility:record, utility:recurring_exception, utility:recycle_bin_empty, utility:recycle_bin_full, utility:redo, utility:refresh, utility:relate, utility:reminder, utility:remove_formatting, utility:remove_link, utility:replace, utility:reply_all, utility:reply, utility:report_issue, utility:reset_password, utility:resource_absence, utility:resource_capacity, utility:resource_territory, utility:retail_execution, utility:retweet, utility:ribbon, utility:richtextbulletedlist, utility:richtextindent, utility:richtextnumberedlist, utility:richtextoutdent, utility:right_align_text, utility:right, utility:rotate, utility:routing_offline, utility:rows, utility:rules, utility:salesforce1, utility:save, utility:screen, utility:search, utility:section, utility:send, utility:sentiment_negative, utility:sentiment_neutral, utility:settings, utility:setup_assistant_guide, utility:setup_modal, utility:setup, utility:share_file, utility:share_mobile, utility:share_post, utility:share, utility:shield, utility:shift_ui, utility:shopping_bag, utility:shortcuts, utility:side_list, utility:signpost, utility:skip_back, utility:skip_forward, utility:skip, utility:slider, utility:smiley_and_people, utility:sms, utility:snippet, utility:sobject_collection, utility:sobject, utility:socialshare, utility:sort, utility:spinner, utility:stage_collection, utility:stage, utility:standard_objects, utility:steps, utility:stop, utility:store, utility:strategy, utility:strikethrough, utility:success, utility:summary, utility:summarydetail, utility:survey, utility:switch, utility:symbols, utility:sync, utility:system_and_global_variable, utility:table_settings, utility:table, utility:tablet_landscape, utility:tablet_portrait, utility:tabset, utility:target, utility:task, utility:text_background_color, utility:text_color, utility:text_template, utility:text, utility:textarea, utility:textbox, utility:threedots_vertical, utility:threedots, utility:thunder, utility:tile_card_list, utility:toggle_panel_bottom, utility:toggle_panel_left, utility:toggle_panel_right, utility:toggle_panel_top, utility:toggle, utility:topic, utility:topic2, utility:touch_action, utility:tracker, utility:trail, utility:trailhead, utility:travel_and_places, utility:trending, utility:turn_off_notifications, utility:type_tool, utility:type, utility:undelete, utility:undeprecate, utility:underline, utility:undo, utility:unlinked, utility:unlock, utility:unmuted, utility:up, utility:upload, utility:user_role, utility:user, utility:variable, utility:video, utility:voicemail_drop, utility:volume_high, utility:volume_low, utility:volume_off, utility:waits, utility:warning, utility:watchlist, utility:weeklyview, utility:wifi, utility:work_order_type, utility:world, utility:yubi_key, utility:zoomin, utility:zoomout|}\" icon-position=\"${5|left,right|}\"></lightning-button>",
            ),
            detail: "Basic Button LWC",
            kind: vscode.CompletionItemKind.Snippet,
        },
        {
            label: "button:group-lwc",
            insertText: new vscode.SnippetString(
                "fghj",
            ),
            detail: "Button Group LWC",
            kind: vscode.CompletionItemKind.Snippet,
        },
    ];

    return vscode.languages.registerCompletionItemProvider('html', {
        provideCompletionItems(doc, pos, token, context) {
            return lwcSnippets;
        },
        resolveCompletionItem(item) {
            let tele = new ADBNTelemetry( context );
            tele.sendAdbnTelementry('lang_usage', {"language": "LWC"}, { 'lang_count': 1});
            tele.sendAdbnTelementry('htmlLWC', {"LWC": item.label}, { 'count': 1});
            return item;
        }
    });
    
}